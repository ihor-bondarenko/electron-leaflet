const r =  require('rethinkdb');
const table = 'map_objects';
const dbConfig = {
    host: process.env.RDB_HOST || 'localhost',
    port: parseInt(process.env.RDB_PORT) || 28015,
    db  : process.env.RDB_DB || 'map_objects'
};
let connection = null;
class RthinkDb {
    constructor(io) {
        this.connection = null;
        this.setup();
        this.io = io;
    }

    setup() {
        let self = this;
        r.connect(dbConfig, (err, conn) => {
            if(err) throw err;
            connection = conn;
            /*r.db('map_objects').tableCreate('objects').run(conn, function(err, result) {
                if (err) throw err;
                console.log(JSON.stringify(result, null, 2));
            });*/
            r.table('objects').changes().run(conn, function(err, cursor) {
                let __rows = [];
                cursor.each(function(err, row) {
                    if (err) throw err;
                    //__rows.push(row);
                    //self.io.emit('private-message', 'aasdsdasd');
                    //console.log(__rows);
                   // console.log(row['new_val']);
                }, function(){
                    console.log(__rows);
                });
                console.log(__rows);
            });
            /*r.table('objects').changes().run(conn, function(err, cursor) {
                cursor.each(function(err, result){
                    console.log(JSON.stringify(result, null, 2));
                });
            })*/

            r.table('objects').insert(
                { name: "William Adama", tv_show: "Battlestar Galactica",
                    coords: [
                        {lat: 51.49621, lon: 31.30013}
                    ]
                },
                {returnChanges: true, conflict: "replace"}
            ).run(conn,function(err, val){
                //console.log(val);
            });

            r.table('objects').run(conn, function(err, cursor){
                if (err) throw err;
                cursor.toArray(function(err, result) {
                    if (err) throw err;
                    //console.log(JSON.stringify(result, null, 2));
                });
            })
        });
    }

    initDb() {

    }

    onChange(data) {

    }

    createDb(conn) {
        /*r.dbCreate('map_objects').run(conn, function(e){
            console.log(e);
        });*/
    }
}

module.exports = RthinkDb;
