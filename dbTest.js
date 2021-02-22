const db = require('./models')


const newAlbum = async () => {
    try{
        const  ledZeppelinOne = await db.album.findOrCreate({
            where: {
                album_title:'Led Zeppelin 1',
                release_year: 1969,
                total_songs: 9
            }
        })
        console.log(ledZeppelinOne)

        const  ledZeppelinTwo = await db.album.findOrCreate({
            where: {
                album_title:'Led Zeppelin 2',
                release_year: 1969,
                total_songs: 9
            }
        })
        console.log(ledZeppelinTwo)

        const  ledZeppelinThree = await db.album.findOrCreate({
            where: {
                album_title:'Led Zeppelin 3',
                release_year: 1970,
                total_songs: 10
            }
        })
        console.log(ledZeppelinThree)

        const  ledZeppelinFour = await db.album.findOrCreate({
            where: {
                album_title:'Led Zeppelin 4',
                release_year: 1971,
                total_songs: 8
            }
        })
        console.log(ledZeppelinFour)

        const  housesOfTheHoly = await db.album.findOrCreate({
            where: {
                album_title:'Houses of the Holy',
                release_year: 1973,
                total_songs: 8
            }
        })
        console.log(housesOfTheHoly)

        const  physicalGraffiti = await db.album.findOrCreate({
            where: {
                album_title:'Physical Graffiti',
                release_year: 1975,
                total_songs: 15
            }
        })
        console.log(physicalGraffiti)
        
        const  presence = await db.album.findOrCreate({
            where: {
                album_title:'Presence',
                release_year: 1976,
                total_songs: 7
            }
        })
        console.log(presence)

        const  inThroughTheOutDoor = await db.album.findOrCreate({
            where: {
                album_title:'In Through the Out Door',
                release_year: 1979,
                total_songs: 7
            }
        })
        console.log(inThroughTheOutDoor)

    }catch(err){
     console.log(err)   
    }
}

newAlbum();