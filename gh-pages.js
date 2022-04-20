var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/ldmichae/minesvelter.git', // Update to point to your repository  
        user: {
            name: 'Logan Michaels', // update to use your name
            email: 'l96mich@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)