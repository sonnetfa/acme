import React from "react";
import './ProductVideo.css'
import { Player } from 'video-react';
import video from './../../videos/How to enroll your device in the Android Enterprise Profile Owner mode with Hexn.mp4'
import poster from './../../images/video thumbnail.png'
class ProductVideo extends React.Component {
    render() {
        return (
            <div className="product-video-tab dashboard-tabs p-3 product-video">
                <h6 className="product-video-header">Product Video</h6>
                <Player
                    playsInline
                    poster={poster}
                    src={video}
                />
            </div>
        )
    }
}
export default ProductVideo;