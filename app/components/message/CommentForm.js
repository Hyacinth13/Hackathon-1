class CommentForm extends React.Component{
 constructor(props){
   super(props);
   this.addComment = this.addComment.bind(this);
 }
 addComment(e){
   e.preventDefault();
   let title = this.refs.title;
   let description = this.refs.description
   let date = this.refs.date;
   $.ajax({
     url: '/messagecomments',
     type: 'POST',
     dataType: 'JSON',
     data: { title: title.value, description: description.value date: date.value  }
   }).done( comment => {
     title.value = '';
     description.value = '';
     date.value = '';
     this.props.addComment(comment);
   }).fail( msg => {
     console.log(msg);
   });
 }
 render() {
   return(
     <div>
       <form onSubmit={this.addComment}>
         <input ref='title' placeholder='title' />
         <input ref='message' placeholder='message' />
         <button type='submit'>Comment</button>
       </form>
     </div>
    );
  }
}