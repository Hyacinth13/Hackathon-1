class MessageForm extends React.Component{
 constructor(props){
   super(props);
   this.addMessage = this.addMessage.bind(this);
 }
 addMessage(e){
   e.preventDefault();
   let title = this.refs.title;
   let description = this.refs.description;
   $.ajax({
     url: '/messagelists',
     type: 'POST',
     dataType: 'JSON',
     data: { title: title.value, description: description.value date: date.value }
   }).done( message => {
     title.value = '';
     description.value = '';
     this.props.addMessage(message);
   }).fail( msg => {
     console.log(msg);
   });
 }
 render() {
   return(
     <div>
       <form onSubmit={this.addMessage}>
         <input ref='title' placeholder='title' />
         <input ref='message' placeholder='message' />
         <button type='submit'>Add Message</button>
       </form>
     </div>
    );
  }
}