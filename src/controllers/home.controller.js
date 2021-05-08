exports.home = (req, res) => {
    let data = [{
        title: 'Man must explore, and this is exploration at its greatest',
        subtitle: 'Problems look mighty small from 150 miles up',
        date: 'on September 24, 2021'
    }, {
        title: 'I believe every human has a finite number of heartbeats. I don\'t intend to waste any of mine.',
        subtitle: '',
        date: 'on September 24, 2021'
    }]
    res.render('index', {
        data
    })
}