// var config = require('./config.json');
// module.exports = function(){
// 	var greet = document.createElement('div');
// 	greet.textContent = config.greetText;
// 	return greet;
// }
//Greeter,js
import React, {Component} from 'react'
import config from './config.json';
import styles from './Greeter.css';//导入css
import styles2 from'./Greeter1.css';
class Greeter extends Component{
  render() {
    return (
      <div className={styles.root}>
        {config.greetText}

        <div className={styles2.root}>
		<span>test</span>
      </div>
      </div>
     
    );
  }
}
export default Greeter
