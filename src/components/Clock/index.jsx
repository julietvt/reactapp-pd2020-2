import React, {Component} from 'react';
import styles from './Clock.module.scss';
class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {
            isRunning: false,
            time: new Date(0,0,0,0,0,0,0,0),
        };
        this.timeoutId = null;
    }
    tick= () => {
        const {time} = this.state;
        this.setState({
            time: new Date(time.getTime()+1000),
        })
    };
    start = () => {
        if(!this.state.isRunning){
            this.setState({
                isRunning: true,
            });
        }
    };
    stop = () => {
        if(this.state.isRunning){
            this.setState({
                isRunning: false,
            });
        }
    };
    clear = () => {
        if(this.timeoutId){
            clearTimeout(this.timeoutId);
            this.timeoutId = null;
        }
    };
    componentDidMount(){ this.start(); }
    componentDidUpdate(){
        const {isRunning} = this.state;
        this.clear();
        if(isRunning){
            this.timeoutId = setTimeout(this.tick, 500);
        }
    }
    componentWillUnmount(){ this.clear(); }
    render(){
        const {time, isRunning} = this.state;
        return(
            <article className={styles.wrapper}>
                <div className={styles.time}>
                    {time.toLocaleTimeString('it-IT')}
                </div>
                <button disabled={isRunning} onClick={this.start}>start</button>
                <button disabled={!isRunning} onClick={this.stop}>stop</button>
                <button>reset</button>
            </article>
        )
    }
}
export default Clock;