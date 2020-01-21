import React, { Component }  from 'react';

class Article extends Component {
  state = {
    paragraph : 'a'
  }
  render() {
    return (

  <div>
    <h1>This is an example of a React Teads integration. This article has dynamically loaded content.</h1>
    <p>{this.state.paragraph}</p>
    <p>{this.state.paragraph}</p>
    <p>{this.state.paragraph}</p>
    <p>{this.state.paragraph}</p>
    <div id="teads" />
    <p>{this.state.paragraph}</p>
    <p>{this.state.paragraph}</p>
    <p>{this.state.paragraph}</p>
    <p>{this.state.paragraph}</p>
    <p>{this.state.paragraph}</p>
    <p>{this.state.paragraph}</p>
    <p>{this.state.paragraph}</p>
    <p>{this.state.paragraph}</p>
    <p>{this.state.paragraph}</p>


  </div>
  ); 
  }

componentDidMount() {
  var arrOfWords = ['Text', 'article', 'panda', 'how', 'art', 'text', 'Lorep', 'Ipsum', 'sed', 'ut', 'dell', 'nutella', 'toast', 'grasshopper'];
  var paragraph = ''
  var i
  for (i=0; i<80; i++){
    var rndWord = arrOfWords[Math.floor(Math.random()*arrOfWords.length)];
    paragraph += rndWord + ' '
  }
  this.setState({
    paragraph:paragraph});



  // For the sake of this example, here we are hard-coding an insertion (1550) to appear every time the page is refreshed. Please see the following 
  // commended code snippet below for an example of how a publisher should implement the TAG on their wesbite.
  setTimeout(function() {
    (function() {
        var placementId = 1;
        // eslint-disable-next-line
        var pageId = 0;
        // eslint-disable-next-line
        var formatName = 'inread';
        var insertionId = 1550;
        // eslint-disable-next-line
        var css = 'margin: 20px auto; max-width: 500px;';
        // eslint-disable-next-line
        var slot = 'article';
        // eslint-disable-next-line
        var min = 0;
        var pageTag = `
          (function(w, d) {
            try {
              d = w.top.document || d; w = w.top.document ? w.top : w;
            } catch (e) {}
            var ttag = function() {
              w.teads.page(0).placement(1, {slider: {allow_corner_position: false, allow_top_position: false}, "css":"margin: 0 auto; max-width: 550px;","format":"inread","slot":{"btf":false,"minimum":2,"slot":"p"}}).serve();
            };
            if (w.teads && w.teads.page) { ttag(); }
            else if (!w.teadsscript) {
              var s = document.createElement('script');
              var protocol = w.location.protocol.match(/^https?:$/) ? w.location.protocol : 'https:';
              s.src = protocol + '//a.teads.tv/media/format/v3/teads-format.min.js';
              s.async = true; s.onload = ttag; w.teadsscript = d.getElementsByTagName('head')[0].appendChild(s);
            } else {
              w.teadsscript.addEventListener('load', ttag);
            }
          })(window, document);
          `;
        var script = document.createElement('script');
        script.innerHTML = pageTag;
        script.setAttribute('class', 'teads');
        script.setAttribute('data-insertion-' + placementId, insertionId);
        document.body.appendChild(script);
    }
    )();
    }, 500);

    // Here is the snippet which a publisher should use to load the Teads TAG. We do not use this tag for this example, because you will not always get an AD
    // (function (d, p) {
    //   var js, s = d.getElementsByTagName('script')[0]; js = d.createElement('script');
    //   js.className = 'teads'; js.async = true; js.type = 'text/javascript';
    //   js.src = '//a.teads.tv/page/'+p+'/tag';
    //   s.parentNode.insertBefore(js, s);
    // })(window.document, 84885);
}
componentWillUnmount(){

  // Finally, this is the cleanup function which destroys all teads resources. It is best practice to wrap this in a try catch.
  try{
    window.teads.cleanup()
  } catch(e){
    console.log(e)
  }
  
}
  
}

export default Article; 