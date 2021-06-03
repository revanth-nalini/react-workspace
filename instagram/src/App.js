import './App.css';
import Post from './Post';
import { useState, useEffect } from 'react';
import { db } from './firebase'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import { Button, Input } from '@material-ui/core';
import {auth} from './firebase'
import ImageUpload from './ImageUpload'
// import InstagramEmbed from 'react-instagram-embed';
import HomeIcon from '@material-ui/icons/Home';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import ExploreIcon from '@material-ui/icons/Explore';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Avatar from '@material-ui/core/Avatar'
import SearchIcon from '@material-ui/icons/Search';

function App() {

  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser]  = useState(null);
  const [openSignIn, setOpenSignIn] = useState(false);


  // const [posts, setPosts] = useState([
  //   {
  //     username:"revanth",
  //     caption:"wow it works",
  //     imageUrl:"https://res.cloudinary.com/practicaldev/image/fetch/s--54ca_F2q--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/1wwdyw5de8avrdkgtz5n.png"
  //   },
  //   {
  //     username:"sridhar",
  //     caption:"yes it works",
  //     imageUrl:"https://cdn.vox-cdn.com/thumbor/Ous3VQj1sn4tvb3H13rIu8eGoZs=/0x0:2012x1341/1400x788/filters:focal(0x0:2012x1341):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
  //   }
  // ]);

  useEffect(()=>{
    db.collection('posts')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot =>{      // snapshot powerful listener - takes snapshot whenever posts changes
      setPosts(snapshot.docs.map(doc => ({
        id:doc.id,
        post:doc.data()
      })))
    }) 
  },[]);

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        setUser(authUser);
        // if(authUser.displayName){ don't update username } 
        // else{ return authUser.updateProfile({displayName : username}) } // just created user
      } else{
        setUser(null);
      }
    })
    return ()=>{
      unsubscribe(); // perform cleanup before refire useEffect 
    }
  },[user,username]);

  const signUp = (event) => {
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email,password)
    .then((authUser)=>{
      return authUser.user.updateProfile({
        displayName : username
      })
    })
    .catch((error) => alert(error.message));
    setOpen(false);
  }

  const signIn = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email,password)
      .catch((error) => alert(error.message));
    setOpenSignIn(false);  
  }

  function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const classes = useStyles();
  const [ modalStyle ] = useState(getModalStyle);

  return (    
    
    <div className="app">

      <Modal open={open} onClose={ () => setOpen(false) } >
            <div style={modalStyle} className={classes.paper}>
              <form className="app__signup">
                <center>
                  <img className="app__headerImage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" />
                </center>
                <Input placeholder="username" type="text" value={username} onChange={(e)=>setUsername(e.target.value)} />
                <Input placeholder="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <Input placeholder="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                <Button type="submit" onClick={signUp}>Sign UP</Button>
              </form>
            </div>  
      </Modal>

      <Modal open={openSignIn} onClose={ () => setOpenSignIn(false) } >
            <div style={modalStyle} className={classes.paper}>
              <form className="app__signup">
                <center>
                  <img className="app__headerImage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" />
                </center>
                <Input placeholder="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <Input placeholder="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                <Button type="submit" onClick={signIn}>Sign In</Button>
              </form>
            </div>  
      </Modal>

      <div className="app__header">
        <img className="app__headerImage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" />
        <div className="app__search">
          <SearchIcon />
          <input type="text" placeholder="search" />
        </div>
        <div className="app__icons">
          <div className="app__iconsLeft">
            <HomeIcon fontSize="large" />
            <WhatsAppIcon fontSize="large" />
            <ExploreIcon fontSize="large" />
            <FavoriteBorderIcon fontSize="large" />
          </div>
          <div className="app__iconsRight">
            <Avatar />
          </div>
        </div>
        { user ? (
        <Button onClick={()=>auth.signOut()}>Log Out</Button>
      ) : (
        <div className="app__loginContainer">
          <Button onClick={()=>setOpenSignIn(true)}>Sign In</Button>
          <Button onClick={()=>setOpen(true)}>Sign Up</Button>
        </div>
      ) }
      </div>

      <div className="app__posts">
        <div className="app_postsLeft">
            {
              posts.map(({id,post})=> (
                <Post key={id} postId={id} username={post.username} user={user} caption={post.caption} imageUrl={post.imageUrl} />
              ))
            }
        </div>
        <div className="app_postsRight">
            {/* <InstagramEmbed url='https://www.instagram.com/theofficialsbi/?hl=en'  clientAccessToken='EAADMVq0LFkQBAMatyf3HTmqxQjLoFPZBavZByM5JI4K18ZBVoXhT22ZB08zpm3vLz0XmtWrA0jUIfTCz6upzA03cR2xr8ZBkD64hZBXvrtP6UBBZByAbS1YYLWWuZAZAOAlWuZBzMQoQQ392PUGGar5zoFiQQOArrK8qEsrInYQ2EmvoAvq533DIJLHVOKNB4iOXZADHN8Ui1ZAzfQiD5WzzdwzL8HrTZCDD36EUurtqrGrOTgc626Kbf7xkIaugebnjqcwAZD' maxWidth={320} hideCaption={false} containerTagName='div' protocol='' injectScript onLoading={() => {}} onSuccess={() => {}} onAfterRender={() => {}} onFailure={() => {}} /> */}

            { user?.displayName ? (   // ? optional. Does not break when user is undefined
                <ImageUpload username={user.displayName} />
            ) : (
                <h3>Sorry please login to upload</h3>
            )} 
            
        </div>
      </div>




    </div>
  );
}

export default App;
