import PropTypes from 'prop-types';

const BackgroundImage = (props) => {

    const style = {
        "backgroundImage": {
            "width": props.w,
            "height": props.h,
            "color": props.color,
            "background": `url(${props.url})`,
            "backgroundRepeat": "no-repeat",
            "backgroundAttachment": props.attachment,
            "backgroundPosition": props.position,
            "backgroundSize": props.size,
            "backgroundColor": props.bgColor,
            "filter": `blur(${props.blur + 'px'})`
        },
        "opacity": {
            "width": "100%",
            "height": "100%",
            "backgroundColor": `rgba(0,0,0,${props.opacity})`
        }
    }

    return (
        <div style={Object.assign({}, style.backgroundImage, props.style)}>
            <div style={style.opacity}></div>
            {props.children}
        </div>
    );
}

BackgroundImage.defaultProps = {
    position:'center',
    size:'cover',
    w: '100%',
    h: '100%',
    opacity: 0,
    blur: 0
}

BackgroundImage.propsTypes = {
    bgColor:PropTypes.string,
    position:PropTypes.string,
    size:PropTypes.string,
    attachment:PropTypes.string,
    opacity:PropTypes.number,
    blur:PropTypes.number,
    style:PropTypes.object
}

export default BackgroundImage;