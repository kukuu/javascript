
      // CommentBox Component
      /*
      ***Here, componentDidMount is a method called automatically by React after a component is rendered for the first time. The key to dynamic updates is the call to this.setState(). We replace the old array of comments with the new one from the server and the UI automatically updates itself. Because of this reactivity, it is only a minor change to add live updates. We will use simple polling (see render method further beneath) here but you could easily use WebSockets or other technologies.*
      *****/

        // CommentBox Component
        var CommentBox = React.createClass({
          loadCommentsFromServer: function() {
            $.ajax({
              url: this.props.url,
              dataType: 'json',
              cache: false,
              success: function(data) {
                this.setState({data: data});
              }.bind(this),
              error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
              }.bind(this)
            });
          },
          getInitialState: function() {
            return {data: []};
          },
          componentDidMount: function() {
            this.loadCommentsFromServer();
            setInterval(this.loadCommentsFromServer, this.props.pollInterval);
          },
          render: function() {
            return (
              <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm />
              </div>
            );
          }
        });


      //COMPOSING components: CommentList and CommentForm

      // CommentList Component
      var CommentList = React.createClass({
        render: function() {
          var commentNodes = this.props.data.map(function(comment) {
            return (
              <Comment author={comment.author} key={comment.id}>
                {comment.text}
              </Comment>
            );
          });
          return (
            <div className="commentList">
              {commentNodes}
            </div>
          );
        }
      });

      // CommentForm Component
      var CommentForm = React.createClass({
        render: function() {
          return (
            <div className="commentForm">
              Hello, world! I am a CommentForm.
            </div>
          );
        }
      });

      // Comment Component
      var Comment = React.createClass({
        rawMarkup: function() {
          var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
          return { __html: rawMarkup };
        },

        render: function() {
          return (
            <div className="comment">
              <h2 className="commentAuthor">
                {this.props.author}
              </h2>
              <span dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>
          );
        }
      });

      //End COMPOSING components: CommentList and CommentForm


      ReactDOM.render(
        <CommentBox url="/commentbox/api/comments" pollInterval={2000} />,
        document.getElementById('content')
      );

