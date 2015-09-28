/*! modernizr 3.0.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-csstransforms-csstransforms3d !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,s,i,f;for(var a in y){if(e=[],n=y[a],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],f=i.split("."),1===f.length?Modernizr[f[0]]=o:(!Modernizr[f[0]]||Modernizr[f[0]]instanceof Boolean||(Modernizr[f[0]]=new Boolean(Modernizr[f[0]])),Modernizr[f[0]][f[1]]=o),C.push((o?"":"no-")+f.join("-"))}}function s(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):_?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function i(){var e=n.body;return e||(e=s(_?"svg":"body"),e.fake=!0),e}function f(e,t,r,o){var f,a,u,l,p="modernizr",d=s("div"),c=i();if(parseInt(r,10))for(;r--;)u=s("div"),u.id=o?o[r]:p+(r+1),d.appendChild(u);return f=s("style"),f.type="text/css",f.id="s"+p,(c.fake?c:d).appendChild(f),c.appendChild(d),f.styleSheet?f.styleSheet.cssText=e:f.appendChild(n.createTextNode(e)),d.id=p,c.fake&&(c.style.background="",c.style.overflow="hidden",l=S.style.overflow,S.style.overflow="hidden",S.appendChild(c)),a=t(d,e),c.fake?(c.parentNode.removeChild(c),S.style.overflow=l,S.offsetHeight):d.parentNode.removeChild(d),!!a}function a(e,n){return!!~(""+e).indexOf(n)}function u(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function l(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function p(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(l(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+l(n[o])+":"+r+")");return s=s.join(" or "),f("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function d(e,n,o,i){function f(){d&&(delete k.style,delete k.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var l=p(e,o);if(!r(l,"undefined"))return l}for(var d,c,m,v,h,y=["modernizr","tspan"];!k.style;)d=!0,k.modElem=s(y.shift()),k.style=k.modElem.style;for(m=e.length,c=0;m>c;c++)if(v=e[c],h=k.style[v],a(v,"-")&&(v=u(v)),k.style[v]!==t){if(i||r(o,"undefined"))return f(),"pfx"==n?v:!0;try{k.style[v]=o}catch(g){}if(k.style[v]!=h)return f(),"pfx"==n?v:!0}return f(),!1}function c(e,n){return function(){return e.apply(n,arguments)}}function m(e,n,t){var o;for(var s in e)if(e[s]in n)return t===!1?e[s]:(o=n[e[s]],r(o,"function")?c(o,t||n):o);return!1}function v(e,n,t,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),f=(e+" "+P.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?d(f,n,o,s):(f=(e+" "+T.join(i+" ")+i).split(" "),m(f,n,t))}function h(e,n,r){return v(e,t,t,n,r)}var y=[],g={_version:"3.0.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){y.push({name:e,fn:n,options:t})},addAsyncTest:function(e){y.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=g,Modernizr=new Modernizr;var C=[],S=n.documentElement,w="CSS"in e&&"supports"in e.CSS,x="supportsCSS"in e;Modernizr.addTest("supports",w||x);var _="svg"===S.nodeName.toLowerCase(),b=g.testStyles=f,z="Moz O ms Webkit",P=g._config.usePrefixes?z.split(" "):[];g._cssomPrefixes=P;var T=g._config.usePrefixes?z.toLowerCase().split(" "):[];g._domPrefixes=T;var E={elem:s("modernizr")};Modernizr._q.push(function(){delete E.elem});var k={style:E.elem.style};Modernizr._q.unshift(function(){delete k.style}),g.testAllProps=v,g.testAllProps=h,Modernizr.addTest("csstransforms3d",function(){var e=!!h("perspective","1px",!0),n=Modernizr._config.usePrefixes;if(e&&(!n||"webkitPerspective"in S.style)){var t;Modernizr.supports?t="@supports (perspective: 1px)":(t="@media (transform-3d)",n&&(t+=",(-webkit-transform-3d)")),t+="{#modernizr{left:9px;position:absolute;height:5px;margin:0;padding:0;border:0}}",b(t,function(n){e=9===n.offsetLeft&&5===n.offsetHeight})}return e}),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&h("transform","scale(1)",!0)}),o(),delete g.addTest,delete g.addAsyncTest;for(var A=0;A<Modernizr._q.length;A++)Modernizr._q[A]();e.Modernizr=Modernizr}(window,document);


/**
 *
 * http://www.anotherhome.net
 * Copyright 2015, DIYgod
 * Free to use under the MIT license.
 *
 */
(function ($) {

    $.carrousel = function (options, element) {
        this.$el = $(element);
        this._init(options);
    };

    $.carrousel.defaults = {
        current: 0,	// index of current item
        autoplay: true,// slideshow on / off
        interval: 3000  // time between transitions
    };

    $.carrousel.prototype = {
        // 初始化
        _init: function (options) {
            this.options = $.extend(true, {}, $.carrousel.defaults, options);

            this.support3d = Modernizr.csstransforms3d;
            this.support2d = Modernizr.csstransforms;

            this.$wrapper = this.$el.find('.dg-wrapper');
            this.$items = this.$wrapper.children();
            this.itemsCount = this.$items.length;
            this.$nav = this.$el.find('nav');
            this.$navPrev = this.$nav.find('.dg-prev');
            this.$navNext = this.$nav.find('.dg-next');
            this.button = $('#lightButton li');
            this.box = $('.banner');

            this.indexB = 0;
            this.CSSX = 0;
            this.CSSXout = 0;

            this.button[0].classList.add('light');

            this.current = this.options.current;
            this.isAnim = false;
            this.$items.css({
                'opacity': 1
            });
            this._updateWidth();
            this._layout();
            // load the events
            this._loadEvents();
            // slideshow
            if (this.options.autoplay) {
                this._startSlideshow();
            }

            var _self = this;
            for (var i = 0, len = this.button.length; i < len; i++) {     // 点击小圆点
                this.button[i].addEventListener('click', function() {
                    var toIndex = parseInt(this.getAttribute('index'));
                    var toMove = toIndex - _self.indexB;
                    switch (toMove) {
                        case 0:
                            break;
                        case 1:
                            _self._navigate('next', 'dg-transition');
                            break;
                        case -1:
                            _self._navigate('prev', 'dg-transition');
                            break;
                        default:
                            _self._stopSlideshow();
                            var bTime = setInterval(function () {
                                if (!_self.isAnim) {
                                    if (!toMove) {
                                        clearInterval(bTime);
                                        if (_self.options.autoplay) {
                                            _self._startSlideshow();
                                        }
                                    }
                                    else if (toMove > 0) {
                                        _self._navigate('next', 'dg-transition-fast');
                                        toMove--;
                                    }
                                    else if (toMove < 0) {
                                        _self._navigate('prev', 'dg-transition-fast');
                                        toMove++;
                                    }
                                }
                            }, 0);
                            break;
                    }
                });
            }
        },

        // 自适应宽度
        _updateWidth: function () {
            if (this.support3d) {
                if (document.body.clientWidth < 1300) {
                    this.CSSX = ($(this.box).width() - 500) / 2;
                    this.CSSXout = ($(this.box).width()) / 10;
                }
                else if (document.body.clientWidth >= 1300 && document.body.clientWidth <= 1500) {
                    this.CSSX = ($(this.box).width() - 700) / 1.8;
                    this.CSSXout = ($(this.box).width() - 500) / 1.3;
                }
                else {
                    this.CSSX = ($(this.box).width() - 700) / 1.9;
                    this.CSSXout = ($(this.box).width() - 500) / 1.4;
                }
            }
            else if (this.support2d) {
                if (document.body.clientWidth < 1464) {
                    this.CSSX = ($(this.box).width() - 10) / 2 - 315;
                    this.CSSXout = 0;
                }
                else if (document.body.clientWidth >= 1464) {
                    this.CSSX = (($(this.box).width() - 10) / 2 - 280) * 0.7;
                    this.CSSXout = ($(this.box).width() - 10) / 2 - 280;
                }
            }
        },

        // 显示小圆点
        _showButton: function () {
            var _self = this;
            for (var i = 0, len = _self.button.length; i < len; i++) {
                if (_self.button[i].classList.contains('light')) {
                    _self.button[i].classList.remove('light');
                    break;
                }
            }
            _self.button[_self.indexB].classList.add('light');
        },

        // 用来绑定点击事件
        _click: function (element, move) {
            var _self = this;
            element.off('click.gallery');
            element.on('click.gallery', function () {
                if (!this.isAnim) {
                    _self._navigate(move);
                    if (_self.options.autoplay) {
                        _self._startSlideshow();
                    }
                }
            });
        },

        // 初始样式
        _layout: function () {
            this._setItems();

            this.$leftItm.css(this._getCoordinates('left'));
            this.$rightItm.css(this._getCoordinates('right'));
            this.$currentItm.css(this._getCoordinates('center')).addClass('dg-center');

            this._click(this.$leftItm, 'prev');
            this._click(this.$prevItm, 'prev');

            this.$currentItm.off('click.carrousel');

            this._click(this.$rightItm, 'next');
            this._click(this.$nextItm, 'next');

            this.$nextItm.css(this._getCoordinates('outright'));
            this.$prevItm.css(this._getCoordinates('outleft'));

            this.$currentItm[0].href = this.$currentItm[0].getAttribute('link');
        },

        // 更新图片位置
        _setItems: function () {

            this.$items.removeClass('dg-center');

            this.$currentItm = this.$items.eq(this.current);
            this.$leftItm = ( this.current === 0 ) ? this.$items.eq(this.itemsCount - 1) : this.$items.eq(this.current - 1);
            this.$rightItm = ( this.current === this.itemsCount - 1 ) ? this.$items.eq(0) : this.$items.eq(this.current + 1);
            this.$nextItm = ( this.$rightItm.index() === this.itemsCount - 1 ) ? this.$items.eq(0) : this.$rightItm.next();
            this.$prevItm = ( this.$leftItm.index() === 0 ) ? this.$items.eq(this.itemsCount - 1) : this.$leftItm.prev();
        },

        _loadEvents: function () {
            var _self = this;
            this.$navPrev.on('click.carrousel', function () {
                _self._navigate('prev');
                return false;
            });

            this.$navNext.on('click.carrousel', function () {
                _self._navigate('next');
                return false;
            });

            this.$wrapper.on('webkitTransitionEnd.carrousel transitionend.carrousel OTransitionEnd.carrousel', function () {
                _self.$currentItm.addClass('dg-center');
                _self.$items.removeClass('dg-transition');
                _self.$items.removeClass('dg-transition-fast');
                _self.isAnim = false;

                // 处理中间元素的href
                _self.$currentItm[0].href = _self.$currentItm[0].getAttribute('link');
                _self.$leftItm[0].href = '#';
                _self.$rightItm[0].href = '#';

                // 处理左右元素的点击事件
                _self._click(_self.$leftItm, 'prev');
                _self._click(_self.$prevItm, 'prev');

                _self.$currentItm.off('click.gallery');

                _self._click(_self.$rightItm, 'next');
                _self._click(_self.$nextItm, 'next');
            });
        },

        // 定义样式
        _getCoordinates: function (position) {
            if (this.support3d) {
                switch (position) {
                    case 'outleft':
                        return {
                            '-webkit-transform': 'translateX(-' + this.CSSXout + 'px) translateZ(-560px) rotateY(45deg)',
                            '-moz-transform': 'translateX(-' + this.CSSXout + 'px) translateZ(-560px) rotateY(45deg)',
                            '-o-transform': 'translateX(-' + this.CSSXout + 'px) translateZ(-560px) rotateY(45deg)',
                            '-ms-transform': 'translateX(-' + this.CSSXout + 'px) translateZ(-560px) rotateY(45deg)',
                            'transform': 'translateX(-' + this.CSSXout + 'px) translateZ(-560px) rotateY(45deg)',
                            'opacity': 1
                        };
                        break;
                    case 'outright':
                        return {
                            '-webkit-transform': 'translateX(' + this.CSSXout + 'px) translateZ(-560px) rotateY(-45deg)',
                            '-moz-transform': 'translateX(' + this.CSSXout + 'px) translateZ(-560px) rotateY(-45deg)',
                            '-o-transform': 'translateX(' + this.CSSXout + 'px) translateZ(-560px) rotateY(-45deg)',
                            '-ms-transform': 'translateX(' + this.CSSXout + 'px) translateZ(-560px) rotateY(-45deg)',
                            'transform': 'translateX(' + this.CSSXout + 'px) translateZ(-560px) rotateY(-45deg)',
                            'opacity': 1
                        };
                        break;
                    case 'left':
                        return {
                            '-webkit-transform': 'translateX(-' + this.CSSX + 'px) translateZ(-300px) rotateY(25deg)',
                            '-moz-transform': 'translateX(-' + this.CSSX + 'px) translateZ(-300px) rotateY(25deg)',
                            '-o-transform': 'translateX(-' + this.CSSX + 'px) translateZ(-300px) rotateY(25deg)',
                            '-ms-transform': 'translateX(-' + this.CSSX + 'px) translateZ(-300px) rotateY(25deg)',
                            'transform': 'translateX(-' + this.CSSX + 'px) translateZ(-300px) rotateY(25deg)',
                            'opacity': 1,
                            'visibility': 'visible'
                        };
                        break;
                    case 'right':
                        return {
                            '-webkit-transform': 'translateX(' + this.CSSX + 'px) translateZ(-300px) rotateY(-25deg)',
                            '-moz-transform': 'translateX(' + this.CSSX + 'px) translateZ(-300px) rotateY(-25deg)',
                            '-o-transform': 'translateX(' + this.CSSX + 'px) translateZ(-300px) rotateY(-25deg)',
                            '-ms-transform': 'translateX(' + this.CSSX + 'px) translateZ(-300px) rotateY(-25deg)',
                            'transform': 'translateX(' + this.CSSX + 'px) translateZ(-300px) rotateY(-25deg)',
                            'opacity': 1,
                            'visibility': 'visible'
                        };
                        break;
                    case 'center':
                        return {
                            '-webkit-transform': 'translateX(0px) translateZ(0px) rotateY(0deg)',
                            '-moz-transform': 'translateX(0px) translateZ(0px) rotateY(0deg)',
                            '-o-transform': 'translateX(0px) translateZ(0px) rotateY(0deg)',
                            '-ms-transform': 'translateX(0px) translateZ(0px) rotateY(0deg)',
                            'transform': 'translateX(0px) translateZ(0px) rotateY(0deg)',
                            'opacity': 1,
                            'visibility': 'visible'
                        };
                        break;
                    case 'hide':
                        return {
                            '-webkit-transform': 'translate(0px) scale(0.7)',
                            'opacity': 1,
                            'visibility': 'visible',
                            'z-index': 1
                        };
                        break;
                }
            }
            else if (this.support2d) {
                switch (position) {
                    case 'outleft':
                        return {
                            '-webkit-transform': 'translate(-' + this.CSSXout + 'px) scale(0.8)',
                            '-moz-transform': 'translate(-' + this.CSSXout + 'px) scale(0.8)',
                            '-o-transform': 'translate(-' + this.CSSXout + 'px) scale(0.8)',
                            '-ms-transform': 'translate(-' + this.CSSXout + 'px) scale(0.8)',
                            'transform': 'translate(-' + this.CSSXout + 'px) scale(0.8)',
                            'opacity': 1,
                            'z-index': 2
                        };
                        break;
                    case 'outright':
                        return {
                            '-webkit-transform': 'translate(' + this.CSSXout + 'px) scale(0.8)',
                            '-moz-transform': 'translate(' + this.CSSXout + 'px) scale(0.8)',
                            '-o-transform': 'translate(' + this.CSSXout + 'px) scale(0.8)',
                            '-ms-transform': 'translate(' + this.CSSXout + 'px) scale(0.8)',
                            'transform': 'translate(' + this.CSSXout + 'px) scale(0.8)',
                            'opacity': 1,
                            'z-index': 2
                        };
                        break;
                    case 'left':
                        return {
                            '-webkit-transform': 'translate(-' + this.CSSX + 'px) scale(0.9)',
                            '-moz-transform': 'translate(-' + this.CSSX + 'px) scale(0.9)',
                            '-o-transform': 'translate(-' + this.CSSX + 'px) scale(0.9)',
                            '-ms-transform': 'translate(-' + this.CSSX + 'px) scale(0.9)',
                            'transform': 'translate(-' + this.CSSX + 'px) scale(0.9)',
                            'opacity': 1,
                            'visibility': 'visible',
                            'z-index': 3
                        };
                        break;
                    case 'right':
                        return {
                            '-webkit-transform': 'translate(' + this.CSSX + 'px) scale(0.9)',
                            '-moz-transform': 'translate(' + this.CSSX + 'px) scale(0.9)',
                            '-o-transform': 'translate(' + this.CSSX + 'px) scale(0.9)',
                            '-ms-transform': 'translate(' + this.CSSX + 'px) scale(0.9)',
                            'transform': 'translate(' + this.CSSX + 'px) scale(0.9)',
                            'opacity': 1,
                            'visibility': 'visible',
                            'z-index': 3
                        };
                        break;
                    case 'center':
                        return {
                            '-webkit-transform': 'translate(0px) scale(1)',
                            '-moz-transform': 'translate(0px) scale(1)',
                            '-o-transform': 'translate(0px) scale(1)',
                            '-ms-transform': 'translate(0px) scale(1)',
                            'transform': 'translate(0px) scale(1)',
                            'opacity': 1,
                            'visibility': 'visible',
                            'z-index': 4
                        };
                    case 'hide':
                        return {
                            '-webkit-transform': 'translate(0px) scale(0.7)',
                            '-moz-transform': 'translate(0px) scale(0.7)',
                            '-o-transform': 'translate(0px) scale(0.7)',
                            '-ms-transform': 'translate(0px) scale(0.7)',
                            'transform': 'translate(0px) scale(0.7)',
                            'opacity': 1,
                            'visibility': 'visible',
                            'z-index': 1
                        }
                        break;
                }
            }
        },

        // 切换
        _navigate: function (dir, speedClass) {
            speedClass = speedClass || 'dg-transition';
            if (!this.isAnim) {
                this._updateWidth();
                this.isAnim = true;

                switch (dir) {
                    case 'next' :
                        this.indexB++;
                        if (this.indexB === this.itemsCount) {
                            this.indexB = 0;
                        }
                        this._showButton();
                        this.current = this.$rightItm.index();
                        // current item moves left
                        this.$currentItm.addClass(speedClass).css(this._getCoordinates('left'));

                        // right item moves to the center
                        this.$rightItm.addClass(speedClass).css(this._getCoordinates('center'));

                        // left item moves out
                        this.$leftItm.addClass(speedClass).css(this._getCoordinates('outleft'));

                        this.$nextItm.addClass(speedClass).css(this._getCoordinates('right'));

                        if (this.itemsCount > 5) {
                            this.$prevItm.addClass(speedClass).css(this._getCoordinates('hide'));
                            this.$prevItm.off('click.carrousel');
                        }

                        var nextEle = ( this.$nextItm.index() === this.itemsCount - 1 ) ? this.$items.eq(0) : this.$nextItm.next();
                        $(nextEle).addClass(speedClass).css(this._getCoordinates('outright'));
                        $(nextEle).off('click.carrousel');

                        break;

                    case 'prev' :
                        this.indexB--;
                        if (this.indexB === -1) {
                            this.indexB = this.itemsCount - 1;
                        }
                        this._showButton();
                        this.current = this.$leftItm.index();
                        // current item moves right
                        this.$currentItm.addClass(speedClass).css(this._getCoordinates('right'));

                        // left item moves to the center
                        this.$leftItm.addClass(speedClass).css(this._getCoordinates('center'));

                        // right item moves out
                        this.$rightItm.addClass(speedClass).css(this._getCoordinates('outright'));

                        this.$prevItm.addClass(speedClass).css(this._getCoordinates('left'));

                        if (this.itemsCount > 5) {
                            this.$nextItm.addClass(speedClass).css(this._getCoordinates('hide'));
                            this.$nextItm.off('click.carrousel');
                        }

                        var prevEle = ( this.$prevItm.index() === 0 ) ? this.$items.eq(this.itemsCount - 1) : this.$prevItm.prev();
                        $(prevEle).addClass(speedClass).css(this._getCoordinates('outleft'));
                        $(prevEle).off('click.carrousel');

                        break;
                }
                ;
                this._setItems();
            }
        },

        // 自动切换
        _startSlideshow: function () {
            if (this.slideshow) {
                clearInterval(this.slideshow);
            }
            var _self = this;
            this.slideshow = setInterval(function () {
                if ($('.dg-center')[0] && !_self.isAnim) {
                    _self._navigate('next');
                }
            }, this.options.interval);
        },

        _stopSlideshow: function () {
            clearTimeout(this.slideshow);
        }
    };

    $.fn.carrousel = function (options) {
        if (typeof options === 'object') {
            this.each(function () {
                var instance = $.data(this, 'carrousel');
                if (!instance) {
                    $.data(this, 'carrousel', new $.carrousel(options, this));
                }
            });
        }
        else if (typeof options === 'string') {
            this.each(function () {
                var instance = $.data(this, 'carrousel');
                if (instance) {
                    switch (options) {
                        case 'play':
                            instance._startSlideshow();
                            instance.options.autoplay = true;
                            break;
                        case 'stop':
                            instance._stopSlideshow();
                            instance.options.autoplay = false;
                            break;
                        case 'next':
                            instance._navigate('next');
                            break;
                        case 'prev':
                            instance._navigate('prev');
                            break;
                    }
                }
            });
        }
        else if (typeof options === 'number') {
            this.each(function () {
                var instance = $.data(this, 'carrousel');
                instance.button[options].click();
            });
        }
        return this;
    };

})(jQuery);