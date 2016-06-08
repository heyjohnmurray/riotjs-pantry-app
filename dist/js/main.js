riot.tag2('app-content', '<main> <h1>Content</h1> </main>', '', '', function(opts) {
});

riot.tag2('app-nav', '<nav> <ul> <li each="{links}"><a href="/{url}">{name}</a></li> </ul> </nav>', '', '', function(opts) {
    var self = this;

    this.links=[
      {"name": "book", "url": "book"},
      {"name": "car", "url": "car"},
      {"name": "man", "url": "man"}
    ]
});

riot.tag2('app', '<app-nav></app-nav> <app-content></app-content>', '', '', function(opts) {
});
