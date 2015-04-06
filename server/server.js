Meteor.startup(function(){
    if(Categories.find().count() < 1){
        var glassID = Categories.insert({name:'Glass'});
        var vaporID = Categories.insert({name:'Vaporizers'});

        Subcategories.insert({name:'Portables', category: vaporID});
        Subcategories.insert({name:'Plug-Ins', category: vaporID});
        Subcategories.insert({name:'Accessories', category: vaporID});

        Subcategories.insert({name:'Scientific', category: glassID});
        Subcategories.insert({name:'Heady', category: glassID});
        Subcategories.insert({name:'Tubes', category: glassID});
        Subcategories.insert({name:'Bubblers', category: glassID});

        Products.insert({
            name:'Magic Flight Launch Box',
            img: '/images/productlist/mflb.jpg',
            price: '100.00',
            mfr: 'Magic Flight',
            cats: [
                {name: 'Portables'}
            ],
            search:['mflb']
        });
        Products.insert({
            name:'Magic Flight Launch Box (Walnut)',
            img: '/images/productlist/mflb2.jpg',
            price: '120.00',
            mfr: 'Magic Flight',
            cats: [
                {name: 'Portables'}
            ],
            search:['mflb']
        });
        Products.insert({
            name: 'Silver Surfer',
            img: '/images/productlist/ssv.jpg',
            price: '270.00',
            mfr: '7th Floor',
            cats: [
                {name: 'Plug-Ins'}
            ],
            search: ['ssv']
        });
        Products.insert({
            name: 'Mini Peyote Pillar',
            img: '/images/productlist/pillar.jpg',
            price: '550.00',
            mfr: 'Sovereignty',
            cats: [
                {name: 'Scientific'},
                {name: 'Bubblers'}
            ],
            search: ['sov']
        });
        console.log('Created Dummy Items');
    }
});

Meteor.methods({
    deleteAll: function(){
        Categories.remove({});
        Subcategories.remove({});
        Products.remove({});
    },
    searchProducts: function(term) {
        return Products.find({"$text":{"$search": term}}).fetch();
    }
});