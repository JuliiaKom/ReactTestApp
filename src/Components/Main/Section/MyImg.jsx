import "./MyImg.css";
import React, { Component } from 'react';
import img1 from '../../../images/img1.jpg'
import img2 from '../../../images/img2.jpg'
import img3 from '../../../images/img3.jpg'
import photo from '../../../images/photo.jpg'
import img4 from '../../../images/img4.jpg'
import img5 from '../../../images/img5.jpg'
import left from '../../../images/arrow-left (1).png'
import right from '../../../images/arrow-right.png'
import math from 'math'

class MyImg extends Component {

    constructor(props) {
        super(props);
        this.state = {
            img_path1: img1,
            alt1: 'img1',
            img_path2: img2,
            alt2: 'img2',
        };

        this.getNew = this.getNew.bind(this);
        this.getNew1 = this.getNew1.bind(this);
    }



    getNew() {
        const items = [
            {ItemName: 'img1', ItemImg: img1},
            {ItemName: 'img2', ItemImg: img2},
            {ItemName: 'img3', ItemImg: img3}
        ];
        let item = items[math.floor(Math.random() * items.length)];
        this.setState({ img_path1: item.ItemImg,
            alt1: item.ItemName });
    }

    getNew1() {
        const items = [
            {ItemName: 'photo', ItemImg: photo},
            {ItemName: 'img2', ItemImg: img4},
            {ItemName: 'img5', ItemImg: img5}
        ];
        let item = items[math.floor(Math.random() * items.length)];
        this.setState({ img_path2: item.ItemImg,
            alt2: item.ItemName });
    }

    render() {
        return (<div>
            <img className='left_btn' src={left} onClick={this.getNew} />
            <img src={this.state.img_path1} alt={this.state.alt1} width={200}  />
            <img src={this.state.img_path2} alt={this.state.alt2} width={200}  />
            <img className="right_btn" src={right} onClick={this.getNew1} />
        </div>);
    }
}

export default MyImg;