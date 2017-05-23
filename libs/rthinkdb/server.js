const r =  require('rethinkdb');
const table = 'map_objects';
const points = require('./points');
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
           // r.table("objects").delete().run(conn, ()=>{console.log('deleted')});
            /*r.dbCreate('map_objects').run(conn, function(e){
                console.log(e);
            })*/
            let coors = [];
            /*r.db('map_objects').tableCreate('objects').run(conn, function(err, result) {
                if (err) throw err;
                console.log(JSON.stringify(result, null, 2));
            });*/
            /*r.table('objects').changes().run(conn, function(err, cursor) {
                let __rows = [];
                if(cursor){
                    cursor.each(function(err, row) {
                        if (err) throw err;
                        self.io.sockets.emit('new-data', row['new_val']);
                    }, function(){
                        console.log(__rows);
                    });
                }
                console.log(__rows);
            });*/

            //setTimeout(function(){
                /*for(var i in points) {
                    console.log(i);
                    r.table('objects').insert({
                        id: i,
                        name: 'Chernihiv',
                        location: r.geojson(points[i]['geometry'])
                    }).run(conn, function(e, s) {
                       // console.log(s);
                    });
                }*/
           // }, 5000);


            /*r.table('objects').insert(
                { name: "William Adama", tv_show: "Battlestar Galactica",
                    coords: [
                        {lat: 51.49621, lon: 31.30013}
                    ]
                },
                {returnChanges: true, conflict: "replace"}
            ).run(conn,function(err, val){
            });*/
            /*r.table('objects').getAll().run(conn, function(e, cursor){
                cursor.each(function(err, row) {
                    if (err) throw err;
                    //self.io.sockets.emit('new-data', row);
                }, function(e, d){
                    console.log(e);
                });
            });*/
            r.table('objects').changes().run(conn, function(err, cursor) {
                if (err) throw err;
                cursor.each(function(err, row) {
                    if (err) throw err;
                    console.log(JSON.stringify(row, null, 2));
                });
            });
            setInterval(function(){
                for(var i in points) {
                     r.table('objects').insert({
                     id: i,
                     name: 'Chernihiv',
                     location: r.geojson(points[i]['geometry'])
                     },{returnChanges: true, conflict: "replace"}).run(conn, function(e, s) {
                     });
                 }
            }, 2000);

            setInterval(function(){
                r.table('objects').run(conn, function(err, cursor){
                    if (err) throw err;
                    cursor.toArray(function(err, result) {
                        if (err) throw err;
                        console.log('send data');
                        self.io.emit('new-data', result);
                    });
                })
            }, 5000);

            /*setInterval(function(){
                r.table('objects').run(conn, function(err, cursor){
                    if (err) throw err;
                    cursor.toArray(function(err, result) {
                        if (err) throw err;
                        self.io.emit('new-data', result);
                    });
                })
            }, 5000);*/

        });
    }

    initDb() {

    }

    onChange(data) {

    }

    getLastData() {
        r.table('geo').get('sfo')('location').toGeojson.run(connection, function(d){
            console.log(d);
        });
    }

    createDb(conn) {
        /*r.dbCreate('map_objects').run(conn, function(e){
            console.log(e);
        });*/
    }
}

module.exports = RthinkDb;
