import * as React from 'react';
import * as ReactDOM from 'react-dom';
import classNames from 'classnames';
import assign from 'object-assign';
import shallowequal from 'shallowequal';

function getScroll(w, top: boolean) {
	let ret = w[`page${top ? 'Y' : 'X'}Offset`];
	const method = `scroll${top ? 'Top' : 'Left'}`;
	if (typeof ret !== 'number') {
		const d = w.document;
		// ie6,7,8 standard mode
		ret = d.documentElement[method];
		if (typeof ret !== 'number') {
			// quirks mode
			ret = d.body[method];
		}
	}
	return ret;
}

function getOffset(element) {
	const rect = element.getBoundingClientRect();
	const body = document.body;
	const clientTop = element.clientTop || body.clientTop || 0;
	const clientLeft = element.clientLeft || body.clientLeft || 0;
	const scrollTop = getScroll(window, true);
	const scrollLeft = getScroll(window);

	return {
		top: rect.top + scrollTop - clientTop,
		left: rect.left + scrollLeft - clientLeft,
	};
}

export default class Affix extends React.Component{
	static propTypes = {
		offsetTop: React.PropTypes.number,
		offsetBottom: React.PropTypes.number,
		offset: React.PropTypes.number,
		onChange: (affixed: boolean) => any
	};

	static defaultProps = {
		onChange() {},
	};

	scrollEvent: any;
	resizeEvent: any;
	refs: {
		fixedNode: any
	};

	constructor(props) {
		super(props);
		this.state = {
			affixStyle: null,
			placeholderStyle: null,
		};
	}

	setAffixStyle(e, affixStyle) {
	    const originalAffixStyle = this.state.affixStyle;
	    if (e.type === 'scroll' && originalAffixStyle && affixStyle) {
	      return;
	    }
	    if (shallowequal(affixStyle, originalAffixStyle)) {
	      return;
	    }
	    this.setState({ affixStyle }, () => {
	      const affixed = !!this.state.affixStyle;
	      if ((affixStyle && !originalAffixStyle) ||
	          (!affixStyle && originalAffixStyle)) {
	        this.props.onChange(affixed);
	      }
	    });
	}

    setPlaceholderStyle(e, placeholderStyle) {
	    const originalPlaceholderStyle = this.state.placeholderStyle;
	    if (e.type === 'resize') {
	      return;
	    }
	    if (shallowequal(placeholderStyle, originalPlaceholderStyle)) {
	      return;
	    }
	    this.setState({ placeholderStyle });
	}

    handleScroll = (e) => {
	    let { offsetTop, offsetBottom, offset } = this.props;

	    // Backwards support
	    offsetTop = offsetTop || offset;
	    const scrollTop = getScroll(window, true);
	    const affixNode = ReactDOM.findDOMNode(this);
	    const fixedNode = ReactDOM.findDOMNode(this.refs.fixedNode);
	    const elemOffset = getOffset(affixNode);
	    const elemSize = {
	      width: fixedNode.offsetWidth,
	      height: fixedNode.offsetHeight,
	    };

	    const offsetMode = {
	      top: null,
	      bottom: null,
	    };
	    if (typeof offsetTop !== 'number' && typeof offsetBottom !== 'number') {
	      offsetMode.top = true;
	      offsetTop = 0;
	    } else {
	      offsetMode.top = typeof offsetTop === 'number';
	      offsetMode.bottom = typeof offsetBottom === 'number';
	    }

	    if (scrollTop > elemOffset.top - offsetTop && offsetMode.top) {
	      // Fixed Top
	      this.setAffixStyle(e, {
	        position: 'fixed',
	        top: offsetTop,
	        left: elemOffset.left,
	        width: affixNode.offsetWidth,
	      });
	      this.setPlaceholderStyle(e, {
	        width: affixNode.offsetWidth,
	        height: affixNode.offsetHeight,
	      });
	    } else if (scrollTop < elemOffset.top + elemSize.height + offsetBottom - window.innerHeight &&
	               offsetMode.bottom) {
	      // Fixed Bottom
	      this.setAffixStyle(e, {
	        position: 'fixed',
	        bottom: offsetBottom,
	        left: elemOffset.left,
	        width: affixNode.offsetWidth,
	      });
	      this.setPlaceholderStyle(e, {
	        width: affixNode.offsetWidth,
	        height: affixNode.offsetHeight,
	      });
	    } else {
	      this.setAffixStyle(e, null);
	      this.setPlaceholderStyle(e, null);
	    }
	}


	componentDidMount() {
		this.scrollEvent = window.addEventListener('scroll', this.handleScroll);
    	this.resizeEvent = window.addEventListener('resize', this.handleScroll);
	}

	componentWillUnmount() {
    	if (this.scrollEvent) {
      	  this.scrollEvent.remove();
    	}
    	if (this.resizeEvent) {
      	  this.resizeEvent.remove();
    	}
  	}

	render() {
	    const className = classNames({
	      'ws-affix': this.state.affixStyle,
	    });

	    const props = assign({}, this.props);
	    delete props.offsetTop;
	    delete props.offsetBottom;

	    return (
	      <div {...props} style={this.state.placeholderStyle}>
	        <div className={className} ref="fixedNode" style={this.state.affixStyle}>
	          {this.props.children}
	        </div>
	      </div>
	    );
	}

}