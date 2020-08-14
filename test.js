~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// READ 
    // FETCH MONSTERS (App --> MonstersContainer)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

class App extends React.Component {
    state = {
      monsters: []
    }
  
    componentDidMount(){
      fetch(API)
      .then(r => r.json())
      .then(monstersObjects => this.setState({monsters: monstersObjects}, () => console.log(this.state.monsters)))
    }

    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // READ 
        // FETCH MONSTERS (App --> MonstersContainer)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    class NewPoemForm extends React.Component {
        state = {
         title: "",
         content: "",
         author: "" 
        }
      
        handleChange = (e) => {
          this.setState({[e.target.name]: e.target.value})
        }
      
        handleSubmit = (e) => {
          e.preventDefault()
          fetch(API, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: JSON.stringify(this.state)})
              // title: this.state.title,
              // content: this.state.content,
              // author: this.state.author
            // })
            .then(r => r.json())
            .then(newPoem => this.props.handleNewPoem(newPoem),
              this.setState({
                title: "",
                content: "",
                author: ""
              }))
          }
    

          
          <div class="ui card">
  <div class="image">
    <div class="ui dimmer">
<div class="content">
  <div class="center">
    <div class="ui inverted button">{name}</div>
  </div>
</div>
    </div>
    <img src="/images/wireframe/image.png">
  </div>
  <div class="content">
    <div class="header">{name}</div>
    <div class="meta">
<a class="group">Monster ID: {id}</a>
    </div>
    <div class="description">World-Famous Professional Triangle Player</div>
  </div>
  <div class="extra content">
    <a class="right floated created">Like</a>
    <a class="friends">
Delete</a>
  </div>
</div>



<div class="ui card">
  <div class="content">
    <div class="header">
<img src="/images/wireframe/square-image.png" class="ui avatar image">
Abbreviated Header
    </div>
    <div class="description">
Short Description
    </div>
  </div>
  <div class="ui two bottom attached buttons">
    <div class="ui button">
Action 1
    </div>
    <div class="ui button">
Action 2
    </div>
  </div>
</div>




<div class="ui segment">
  <div class="ui three column very relaxed grid">
    <div class="column">
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
    <div class="column">
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
    <div class="column">
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
  </div>
  <div class="ui vertical divider">
    and
  </div>
</div>