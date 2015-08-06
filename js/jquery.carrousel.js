/**
 *
 * http://www.anotherhome.net
 * Copyright 2015, DIYgod
 * Free to use under the MIT license.
 *
 */
(function ($, undefined) {

    $.Gallery = function (options, element) {
        this.$el = $(element);
        this._init(options);
    };

    $.Gallery.defaults = {
        current: 0,	// index of current item
        autoplay: false,// slideshow on / off
        interval: 3000  // time between transitions
    };

    $.Gallery.prototype = {
        // 初始化
        _init: function (options) {
            this.options = $.extend(true, {}, $.Gallery.defaults, options);

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
            this.CSSX;
            this.CSSXout;

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
                _self.button[i].addEventListener('click', function () {
                    var toIndex = parseInt(this.getAttribute('index'));
                    var toMove = toIndex - _self.indexB;
                    if (toMove === 0) {
                        return;
                    }
                    clearTimeout(_self.slideshow);
                    _self.current = toIndex;
                    _self.$items.css('z-index', '0');
                    _self.$items.addClass('dg-transition');
                    _self.$items.css('opacity', '0');
                    _self.$items.eq(_self.current).removeClass('dg-transition');
                    _self._layout();
                    _self.indexB = toIndex;
                    _self._showButton();
                    _self._startSlideshow();
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

        // 初始样式
        _layout: function () {
            this._setItems();

            var _self = this;
            this.$leftItm.css(this._getCoordinates('left'));
            this.$rightItm.css(this._getCoordinates('right'));
            this.$currentItm.css(this._getCoordinates('center')).addClass('dg-center');

            this.$leftItm.off('click.gallery');
            this.$leftItm.on('click.gallery', function (event) {
                if (!this.classList.contains('dg-transition')) {
                    _self._navigate('prev');
                }
            });

            this.$currentItm.off('click.gallery');

            this.$rightItm.off('click.gallery');
            this.$rightItm.on('click.gallery', function (event) {
                if (!this.classList.contains('dg-transition')) {
                    _self._navigate('next');
                }
            });

            this.$nextItm.css(this._getCoordinates('outright'));
            this.$prevItm.css(this._getCoordinates('outleft'));

            this.$currentItm[0].href = _self.$currentItm[0].getAttribute('link');
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
            this.$navPrev.on('click.gallery', function (event) {
                _self._navigate('prev');
                return false;
            });

            this.$navNext.on('click.gallery', function (event) {
                _self._navigate('next');
                return false;
            });

            this.$wrapper.on('webkitTransitionEnd.gallery transitionend.gallery OTransitionEnd.gallery', function (event) {
                _self.$currentItm.addClass('dg-center');
                _self.$items.removeClass('dg-transition');
                _self.isAnim = false;

                // 处理中间元素的href
                _self.$currentItm[0].href = _self.$currentItm[0].getAttribute('link');
                _self.$leftItm[0].href = '#';
                _self.$rightItm[0].href = '#';

                // 处理左右元素的点击事件
                _self.$leftItm.off('click.gallery');
                _self.$leftItm.on('click.gallery', function (event) {
                    if (!this.classList.contains('dg-transition')) {
                        clearTimeout(_self.slideshow);
                        _self._navigate('prev');
                        _self._startSlideshow();
                    }
                });

                _self.$currentItm.off('click.gallery');

                _self.$rightItm.off('click.gallery');
                _self.$rightItm.on('click.gallery', function (event) {
                    clearTimeout(_self.slideshow);
                    _self._navigate('next');
                    _self._startSlideshow();
                });
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
                        }
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
        _navigate: function (dir) {
            if (!this.isAnim) {
                this._updateWidth();

                this.isAnim = true;
                var _self = this;

                switch (dir) {
                    case 'next' :
                        this.indexB++;
                        if (this.indexB === this.itemsCount) {
                            this.indexB = 0;
                        }
                        this._showButton();
                        this.current = this.$rightItm.index();
                        // current item moves left
                        this.$currentItm.addClass('dg-transition').css(this._getCoordinates('left'));

                        // right item moves to the center
                        this.$rightItm.addClass('dg-transition').css(this._getCoordinates('center'));

                        // left item moves out
                        this.$leftItm.addClass('dg-transition').css(this._getCoordinates('outleft'));

                        this.$nextItm.addClass('dg-transition').css(this._getCoordinates('right'));

                        if (this.itemsCount > 5) {
                            this.$prevItm.addClass('dg-transition').css(this._getCoordinates('hide'));
                            this.$prevItm.off('click.gallery');
                        }

                        var nextEle = ( this.$nextItm.index() === this.itemsCount - 1 ) ? this.$items.eq(0) : this.$nextItm.next();
                        $(nextEle).addClass('dg-transition').css(this._getCoordinates('outright'));
                        $(nextEle).off('click.gallery');

                        break;

                    case 'prev' :
                        this.indexB--;
                        if (this.indexB === -1) {
                            this.indexB = this.itemsCount - 1;
                        }
                        this._showButton();
                        this.current = this.$leftItm.index();
                        // current item moves right
                        this.$currentItm.addClass('dg-transition').css(this._getCoordinates('right'));

                        // left item moves to the center
                        this.$leftItm.addClass('dg-transition').css(this._getCoordinates('center'));

                        // right item moves out
                        this.$rightItm.addClass('dg-transition').css(this._getCoordinates('outright'));

                        this.$prevItm.addClass('dg-transition').css(this._getCoordinates('left'));

                        if (this.itemsCount > 5) {
                            this.$nextItm.addClass('dg-transition').css(this._getCoordinates('hide'));
                            this.$nextItm.off('click.gallery');
                        }

                        var prevEle = ( this.$prevItm.index() === 0 ) ? this.$items.eq(this.itemsCount - 1) : this.$prevItm.prev();
                        $(prevEle).addClass('dg-transition').css(this._getCoordinates('outleft'));
                        $(prevEle).off('click.gallery');

                        break;
                }
                ;
                this._setItems();
            }
        },

        // 自动切换
        _startSlideshow: function () {
            var _self = this;
            this.slideshow = setInterval(function () {
                if ($('.dg-center')[0] && !$('.dg-center')[0].classList.contains('dg-transition')) {
                    _self._navigate('next');
                }
            }, this.options.interval);
        },

        destroy: function () {
            this.$navPrev.off('.gallery');
            this.$navNext.off('.gallery');
            this.$wrapper.off('.gallery');
        }
    };

    $.fn.gallery = function (options) {
        if (typeof options === 'string') {
            var args = Array.prototype.slice.call(arguments, 1);
            this.each(function () {
                var instance = $.data(this, 'gallery');
                instance[options].apply(instance, args);
            });
        }
        else {
            this.each(function () {
                var instance = $.data(this, 'gallery');
                if (!instance) {
                    $.data(this, 'gallery', new $.Gallery(options, this));
                }
            });
        }
        return this;
    };

    $('#dg-container').gallery({
        autoplay: true,
        interval: 3000
    });

})(jQuery);