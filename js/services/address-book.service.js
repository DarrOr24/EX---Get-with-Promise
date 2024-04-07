'use strict'

function getNames() {
    return axios.get('http://www.filltext.com/?rows=10&fname=%7bfirstName%7d&lname=%7blastName%7d&tel=%7bphone|format%7d&address=%7bstreetAddress%7d&city=%7bcity%7d&state=%7busState|abbr%7d&zip=%7bzip%7d&pretty=true')
        .then(res => res.data)
        .catch(err => {
            console.log(err)
            throw 'Sonething went wrong.. try agin later'
        })
        .finally(() => console.log('Finally...'))
}


