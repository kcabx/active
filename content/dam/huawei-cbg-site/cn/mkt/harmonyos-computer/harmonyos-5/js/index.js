document.addEventListener('DOMContentLoaded', function () {

    "use strict!"

    const
        ua = navigator.userAgent
        bod = document.querySelector("body"),
        isIe = ua.toLowerCase().indexOf('trident') > -1 ? true : false,
        isUc = ua.indexOf('UCBrowser') > -1 ? true : false,
        isWeChat = ua.toLowerCase().indexOf("micromessenger") > -1 ? true : false,
        isTouch = ("ontouchstart" in window) ? true : false;
    let isM = window.matchMedia("(max-aspect-ratio:7/10)").matches, naH = 80,
        isFold = window.matchMedia("(min-aspect-ratio:7/10) and (max-aspect-ratio: 11/10)").matches;
        bod.style.setProperty("--naH", naH + "px");
        window.lazySizesConfig = window.lazySizesConfig || {};
        lazySizesConfig.expand = 1500;
        lazySizesConfig.expFactor = 4;
    let supportWebp = document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0;

    const isSafri = /Safari/.test(navigator.userAgent);
    isSafri && $(".hideipad").remove();

    if (isTouch) {
        var evt = "onorientationchange" in window ? "orientationchange" : "resize";
        window.addEventListener(evt, function () {
            window.location.reload();
        }, false);
    }

    const hEnSren = {
        ucwxie: isUc || isWeChat,
        hOptions: {
            root: null,
            threshold: [0]
        },
        hObserAnima: null,
        hObserVideo: null,
        hvideoEles: null,
        hanimatios: null,

        hInitEles: function (hvel, haniel) {
            hvel && (this.hvideoEles = Array.prototype.slice.call(document.querySelectorAll(hvel)));
            haniel && (this.hanimatios = Array.prototype.slice.call(document.querySelectorAll(haniel)));
            hvel && this.hInitVidim();
            haniel && this.hPAnimation();
        },
        hPAnimation: function () {
            this.hObserAnima = new IntersectionObserver(function (changes) {
                changes.forEach(function (d) {
                    d.intersectionRatio > 0 ? d.target.classList.add('will-change') : d.target.classList.remove('will-change');
                });
            })

            for (let i = 0; i < this.hanimatios.length; i++) {
                this.hObserAnima.observe(this.hanimatios[i]);
            }
        },
        hInitVidim: function () {
            this.hposterLazy();
            this.hposterLazy2();
            this.hposterLazy3();
            this.hVideoplay();
            this.hVideoplay1();
            this.hVideoplay2();
            this.videoLeavePause();

            if( this.ucwxie ) return;
            for (let i = 0; i < this.hvideoEles.length; i++) {
                if( !$(this.hvideoEles[i]).hasClass("aboutvideo") &&  !$(this.hvideoEles[i]).hasClass("aboutvideo1")) {
                    this.hObserVideo.observe(this.hvideoEles[i]);
                }
            }
        },
        hVideoplay: function () {

            let spath = "";

            if( isM ) {
                spath = "data-src-mb";
            }else if( isFold ) {
                spath = "data-src-flod";
            }else {
                spath = "data-src";
            }

            const that = this;
            this.hObserVideo = new IntersectionObserver(vEntri => {
                if (that.ucwxie) return;
                for (let i = 0; i < vEntri.length; i++) {
                    if (vEntri[i].intersectionRatio > 0) {
                        $(vEntri[i].target).find("source").each(function (index, item) {
                            item.setAttribute("src", item.getAttribute(spath));
                        })
                        setTimeout(function () {
                            vEntri[i].target.load();
                            if ($(vEntri[i].target).hasClass("nodonow")) return;
                            vEntri[i].target.play().catch(function (err) {
                                vEntri[i].target.play();
                            })
                        }, 500);

                        this.hObserVideo.unobserve(vEntri[i].target);
                    }
                }
            }, {
                rootMargin: window.innerHeight * 1.3 + "px 0px " + window.innerHeight * 1.3  + "px 0px"
            })
        },
        hVideoplay1: function () {
            let spath = "";

            if( isM ) {
                spath = "data-src-mb";
            }else if( isFold ) {
                spath = "data-src-flod";
            }else {
                spath = "data-src";
            }

            const that = this;
            this.hObserVideo1 = new IntersectionObserver(vEntri => {
                if (that.ucwxie) return;
                for (let i = 0; i < vEntri.length; i++) {
                    if (vEntri[i].intersectionRatio > 0) {
                        $(vEntri[i].target).parents(".hw-os").find(".aboutvideo").each(function(i, t) {
                            $(t).find("source").each(function(i1, t1) {
                                t1.setAttribute("src", t1.getAttribute(spath));

                                setTimeout(function() {
                                    t.load();
                                    if( $(t).hasClass("nodonow") ) return;
                                    t.play().catch(function() {
                                        t.play();
                                    })
                                }, 500)
                            })
                        })
                        this.hObserVideo1.unobserve(vEntri[i].target);
                    }
                }
            }, {
                rootMargin: "0px"
            })

            this.hObserVideo1.observe(document.querySelector(".aixiaoyswiper"));
        },
        hVideoplay2: function () {
            let spath = "";

            if( isM ) {
                spath = "data-src-mb";
            }else if( isFold ) {
                spath = "data-src-flod";
            }else {
                spath = "data-src";
            }

            const that = this;
            this.hObserVideo2 = new IntersectionObserver(vEntri => {
                if (that.ucwxie) return;
                for (let i = 0; i < vEntri.length; i++) {
                    if (vEntri[i].intersectionRatio > 0) {

                        console.log( $(".ostitlemodal").find(".aboutvideo1") )
                        $(".ostitlemodal").find(".aboutvideo1").each(function(i, t) {
                            $(t).find("source").each(function(i1, t1) {
                                t1.setAttribute("src", t1.getAttribute(spath));

                                setTimeout(function() {
                                    t.load();
                                    if( $(t).hasClass("nodonow") ) return;
                                    t.play().catch(function() {
                                        t.play();
                                    })
                                }, 500)
                            })
                        })
                        this.hObserVideo2.unobserve(vEntri[i].target);
                    }
                }
            }, {
                rootMargin: "0px"
            })

            this.hObserVideo2.observe(document.querySelector(".liveswiper"));
        },
        hposterLazy: function() {

            const that = this;
            const rootEl = document.querySelector(".delicateuses");
            this.hObservePoster = new IntersectionObserver(p => {
                for( let  i = 0; i < p.length; i++ ) {
                    if( p[i].intersectionRatio > 0 ) {
                        str = "data-";
                        if( isM ) {
                            str = str + "mob-poster-"
                        }else if( isFold ) {
                            str = str + "flod-poster-"
                        }else  {
                            str = str + "pc-poster-"
                        }

                        str += that.ucwxie ?  "complete" : "first";

                        const path = p[i].target.getAttribute(str);
                        p[i].target.setAttribute("poster", path);

                        this.hObservePoster.unobserve(p[i].target);
                    }
                }
            }, {
                rootMargin: window.innerHeight * 2.5 + "px 0px " + window.innerHeight * 2.5 + "px 0px"
            })


            const pos = document.querySelectorAll(".povideo video");
            for( let i = 0; i < pos.length; i++ ) {
                if( !$(pos[i]).hasClass("rivideo") ) {
                    this.hObservePoster.observe(pos[i]);
                }
            }
        },
        hposterLazy2: function(el, rootName) {

            const that = this;
            this.hObservePosterBig = new IntersectionObserver(p => {

                for( let  i = 0; i < p.length; i++ ) {
                    if( p[i].intersectionRatio > 0 ) {

                        str = "data-";
                        if( isM ) {
                            str = str + "mob-poster-"
                        }else if( isFold ) {
                            str = str + "flod-poster-"
                        }else  {
                            str = str + "pc-poster-"
                        }

                        str += that.ucwxie ?  "complete" : "first";

                        const videos = p[i].target.querySelectorAll(".rivideo");


                        for( let i = 0; i < videos.length; i++ ) {
                            const path = videos[i].getAttribute(str);
                            videos[i].setAttribute("poster", path);
                        }


                        this.hObservePosterBig.unobserve(p[i].target);
                    }
                }
            }, {
                rootMargin: window.innerHeight * 2.5 + "px 0px "+window.innerHeight * 2.5+"px 0px"
            })

            this.hObservePosterBig.observe(document.querySelector(".delicateuses"));
            this.hObservePosterBig.observe(document.querySelector(".liveswiper"));
            this.hObservePosterBig.observe(document.querySelector(".aixiaoyswiper"));
            this.hObservePosterBig.observe(document.querySelector(".eauseswiper"));
            
        },
        hposterLazy3: function(el, rootName) {

            const that = this;
            this.modalObserver = new IntersectionObserver(p => {

                for( let  i = 0; i < p.length; i++ ) {
                    if( p[i].intersectionRatio > 0 ) {

                        str = "data-";
                        if( isM ) {
                            str = str + "mob-poster-"
                        }else if( isFold ) {
                            str = str + "flod-poster-"
                        }else  {
                            str = str + "pc-poster-"
                        }

                        str += that.ucwxie ?  "complete" : "first";

                        const videos = document.querySelectorAll(".ostitlemodal .rivideo");


                        for( let i = 0; i < videos.length; i++ ) {
                            const path = videos[i].getAttribute(str);
                            videos[i].setAttribute("poster", path);
                        }

                        this.modalObserver.unobserve(p[i].target);
                    }
                }
            }, {
                rootMargin: "0px"
            })

            this.modalObserver.observe( document.querySelector(".liveswipenav") );
            
        },
        videoLeavePause() {
            const that = this;
            let ob = new IntersectionObserver(function (e) {
                e.forEach(function (video) {
                    if (video.isIntersecting) {
                        video.target.play().catch(function() {
                            video.target.play()
                        })
                    } else {
                        video.target.pause();
                    }
                })
            });
            document.querySelectorAll(".leave-pause").forEach(function (e) {
                ob.observe(e)
            })
            ob = null;
        },
    }



    hEnSren.hInitEles(".custom-video", ".oswillchan")


    function hSwiObserve() {
        this.sobserve = null;
        this.obserObj = null;
    }


    hSwiObserve.prototype = {
        initVideoPlay: function(obserObj) {
            if(isUc || isWeChat) return;
            this.obserObj = obserObj;
            this.videoPlay();
            this.sobserve.observe(obserObj.el)
        },
        videoPlay: function () {
            const that = this;
            this.sobserve = new IntersectionObserver(function (changes) {
                for (let i = 0; i < changes.length; i++) {
                    if (changes[i].intersectionRatio > 0) {
                        $(that.obserObj.el).find("video")[0].play().catch(function() {
                            $(that.obserObj.el).find("video")[0].play()
                        });
                        that.sobserve.unobserve(that.obserObj.el)
                    }
                }
            },{
                rootMargin: -300 + "px 0px " + (-300) + "px 0px"
            })
        },
        initElments: function (obserObj) {
            this.obserObj = obserObj;
            this.initObs();
            this.sobserve.observe(obserObj.el);
        },
        initObs: function () {
            const that = this;
            this.sobserve = new IntersectionObserver(function (changes) {
                for (let i = 0; i < changes.length; i++) {
                    if (changes[i].intersectionRatio > 0)
                        that.obserObj.s.autoplay.start();
                    else
                        that.obserObj.s.autoplay.stop();
                }
            })
        }
    }

    function PreLoad(el, fn) {
        const obserEl = document.querySelector(el);
        let preloadObserve = new IntersectionObserver(function (changes) {
            for (let i = 0; i < changes.length; i++) {
                if (changes[i].intersectionRatio > 0) {
                    fn && fn();
                    preloadObserve.unobserve(obserEl)
                }
            }
        }, {
            rootMargin: window.innerHeight * 2 + "px 0px " + window.innerHeight * 2 + "px 0px"
        })

        preloadObserve.observe(obserEl)
    }




    const hWhoreMethods = {
        init: function() {
            const that = this;
            this.loadAsynckv();
            this.coutFirSren();
            setTimeout(function() {
                that.pvSticky();
                that.thirSecAnimation();
                that.thirSecSerilize();
                that.countHeight();
                that.circleScale(".intevethincircle", ".intevethincontent");
                that.circleScale(".safeprotectioncircle", ".safeprotectiioncon");
                that.circleScale(".premiumappcircle", ".preminumapptxt");
                that.circleScale(".delicatecircle", ".delicatetxtcon");
                that.intethScrollTri();
                that.soldifScroll();
            }, 2000)
            that.circleScale(".allaroundcircle", ".allroutri");
            this.simfinSwiper();
            this.liveSwiper();
            this.aixiaoySwiper();
            this.solvedifSwiper();
            this.multiFunSwiper();
            this.eauseSwiper();
            this.safeprocoSwiper();
            this.havscreenSwiper();
            this.premiumsmothmove();
            this.allroundScrollTri();
            this.modalSwiper();
            this.initModalMethod();
            this.meetDisQuestion();
            this.modalvideoplay();
            this.supClick();
            this.ucwxhide();
            this.exploreBtn();
            this.wechartShare();
        },
        coutFirSren: function() {
            if( isM ) {
                const MobNavH = $(".main-navigation__container").outerHeight();
                $(".hw-os .os-sec1").css("height", window.innerHeight - MobNavH +"px");
            }
        },
        loadAsynckv: function() {
            const that = this;
            const kvscreenim = document.querySelector(".oskvscreen img"),
                  kvoutcom = document.querySelector(".oskvoutcom img");

            Promise.all([this.loadImage(kvscreenim.src), this.loadImage(kvoutcom.src)]).then(function(res) {
                that.kvAnimation();
            })
        },
        loadImage: function( url ) {
            return new Promise(function(resolve, reject) {
                let img = new Image();
                    img.src = url;
                    img.onload = function() {
                        resolve(img)
                    }
                })
        },
        kvAnimation: function() {
            document.querySelector(".os-sec1").classList.add("active");
        },
        pvSticky: function() {
            const that = this;
            let pvtimeline = gsap.timeline();
                pvtimeline.add(
                    [
                        gsap.to(".oscircleabove", 5, {
                            y: 0
                        }),
                        gsap.to(".oscirclebelow", 5, {
                            rotation: 180
                        }),
                        gsap.to(".lintxt1", 1, {
                            backgroundImage: isM ? "linear-gradient(to bottom, #5f93ff 30%, #253c6c 100%)" : "linear-gradient(to bottom, #5f93ff 0%, #253c6c 77%)"
                        }),
                        gsap.to(".lintxt2", 1, {
                            backgroundImage: isM ? "linear-gradient(to bottom, #5f93ff 30%, #253c6c 100%)" : "linear-gradient(to bottom, #5f93ff 0%, #253c6c 77%)",
                            delay: 1
                        }),
                        gsap.to(".lintxt3", 1, {
                            backgroundImage: isM ? "linear-gradient(to bottom, #5f93ff 30%, #253c6c 100%)" : "linear-gradient(to bottom, #5f93ff 0%, #253c6c 77%)",
                            delay: 2
                        }),
                        gsap.to(".lintxt4", 1, {
                            backgroundImage: isM ? "linear-gradient(to bottom, #5f93ff 30%, #253c6c 100%)" : "linear-gradient(to bottom, #5f93ff 0%, #253c6c 77%)",
                            delay: 3
                        }),
                        gsap.to(".lintxt5", 1, {
                            backgroundImage: isM ? "linear-gradient(to bottom, #5f93ff 30%, #253c6c 100%)" : "linear-gradient(to bottom, #5f93ff 0%, #253c6c 77%)",
                            delay: 4
                        })
                    ]
                )
            

            let winHeight = 0;
            
            if( isM ) {
                winHeight = document.querySelector(".delihutxtcon").clientHeight;
            } else {
                winHeight = document.querySelector(".delicatecontent").clientHeight;
            }
            
            
            let distance = ( winHeight - $(".pvcirclecon").height() ) / 2
                bod.style.setProperty("--pvstiposition", distance +"px");
                bod.style.setProperty("--fupvstiposition", -distance +"px");

            let scrolltri = ScrollTrigger.create({
                trigger: ".pvtrigger",
                start:"top top",
                end: "+=60%",
                scrub: 1.5,
                animation: pvtimeline
            });
        },
        txtColorcha: function(txtel, colorCha) {
            $(txtel).toggleClass("active").hasClass("active") ? 
            gsap.to(txtel, 0.5, { backgroundImage: colorCha}) :
            gsap.to(txtel, 0.5, { backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%,  rgba(0, 0, 0, 0.2) 100%)"})
        },
        circleScale: function(elscale, triggerel) {
            let detimeline = gsap.timeline();

                detimeline.add(gsap.to(elscale, 1, {
                    scaleY: 1,
                    ease: "power1.out"
                }))

            let deliScroll = ScrollTrigger.create({
                trigger: triggerel,
                start:"top 90%",
                end: "+=50%",
                scrub: 1,
                animation: detimeline
            });
        },
        thirSecSerilize: function() {
            let serilizeCanvas = null;
            let seriCanvasCon = null;
            let delicatecontent = null;
            const that = this;
            const innerHeight = isM ? document.querySelector(".delihutxtcon").clientHeight : document.querySelector(".delicatecontent").clientHeight
           
            if( !isM ) {
                serilizeCanvas = document.querySelector("#decanvas");
                serilizeCanvas.width = $(".delicacanvascon").width() * 2;
                serilizeCanvas.height = $(".delicacanvascon").height() * 2;
                seriCanvasCon = document.querySelector(".delicacanvascon").getBoundingClientRect();
                delicatecontent = document.querySelector(".delicatecontent").getBoundingClientRect();
            } else {
                serilizeCanvas = document.querySelector("#decanvasmob");
                serilizeCanvas.width = $(".delicamobcanvas").width() * 2;
                serilizeCanvas.height = $(".delicamobcanvas").height() * 2;
                seriCanvasCon = document.querySelector(".delicamobcanvas").getBoundingClientRect();
                delicatecontent = document.querySelector(".delihutxtcon").getBoundingClientRect();
            }

            let seriScale = 1;
            let transdistance = 0;
            let distancetop = 0;
            let gapdistance = 0;
            let imcount = 61;
            let recordIndex = -1;

            canvasAxio = serilizeCanvas.width / serilizeCanvas.height;
            windowAxio = window.innerWidth / innerHeight;

            if( canvasAxio >= windowAxio ) {
                seriScale = innerHeight / seriCanvasCon.height + 0.1 ;
                transdistance = ( innerHeight - seriCanvasCon.height ) / 2;
                distancetop = seriCanvasCon.top - delicatecontent.top;
                gapdistance = distancetop - transdistance;
            } else {
                seriScale = window.innerWidth / seriCanvasCon.width +  0.1 ;
                transdistance = ( innerHeight - seriCanvasCon.height ) / 2;
                distancetop =  seriCanvasCon.top - delicatecontent.top ;
                gapdistance = distancetop - transdistance;
            }

            if( !isM ) {
                $(".delcomframcanvcon").css({
                    transform: "translate3d(0, "+ ( parseInt( -gapdistance  )   ) +"px, 0) scale("+ seriScale+") rotate(0deg)"
                });
            } else {
                $(".delicamobcomfra").css({
                    transform: "translate3d(0, "+ ( parseInt( -gapdistance  ) ) +"px, 0) scale("+ seriScale+")  rotate(0deg)"
                });
            }


            this.ctx = this.setupCanvas( serilizeCanvas );

            let allimsArr = [];
            PreLoad(".os-sec3", function() {
                allimsArr = that.loadSerilizeImg( serilizeCanvas, imcount );
            })
            
            let canvasTimeLine = gsap.timeline();
            let seriliIndex = 0;
            let obj = {
                value: 0
            }

            canvasTimeLine.add(
                gsap.to(".delihuinnercon", {
                    opacity: 0,
                    duration: 1
                })
            )
            canvasTimeLine.add(
                [
                    gsap.to( ".delicacomputfram" , {
                        duration: 2,
                        opacity: 1
                    }),
                    gsap.to( ( isM ? ".delicamobcomfra" : ".delcomframcanvcon" ), {
                        duration: 8,
                        y: 0,
                        scale: 1
                    }),
                    gsap.to( ".deliscreenim1", {
                        duration: 8,
                        y: 0,
                        x: 0
                    }),
                    gsap.to( ".deliscreenim2", {
                        duration: 8,
                        y: 0,
                        x: 0
                    }),
                    gsap.to( ".deliscreenim3", {
                        duration: 8,
                        y: 0,
                        x: 0
                    }),
                    gsap.to( ".delideskdock", {
                        duration: 2.5,
                        opacity: 1,
                        y: 0,
                        delay: 5.5
                    }),
                    gsap.to( obj, {
                        duration: 3,
                        value: imcount - 1,
                        onUpdate: function() {
                            seriliIndex = parseInt(  obj.value );
                            if( recordIndex == seriliIndex ) return;
                            recordIndex = seriliIndex;
                            if( allimsArr[seriliIndex] && !allimsArr[seriliIndex].isloaded ) return;

                            if( !allimsArr[seriliIndex] ) return;
                            that.ctx.clearRect(0, 0, that.ctx.canvas.width, that.ctx.canvas.height);
                            that.ctx.drawImage(allimsArr[seriliIndex], 0, 0, allimsArr[seriliIndex].width, allimsArr[seriliIndex].height,
                                0, 0, that.ctx.canvas.width,
                                that.ctx.canvas.height )
                        }
                    }),
                ]
                    
            )
            canvasTimeLine.add(function() {
                $(".delicatecontent").hasClass("active") ?
                $(".delicatecontent").removeClass("active") :
                $(".delicatecontent").addClass("active");
            })
            canvasTimeLine.add( gsap.to(".delicatecontent", 1, {}) )

            let canvasScrollTrigger = ScrollTrigger.create({
                trigger: ".delicatetrigger",
                start: "top top",
                end: "+=100%",
                scrub: 1,
                animation: canvasTimeLine
            })
        },
        loadSerilizeImg: function( serilizeCanvas, imcount ) {
            let src = serilizeCanvas.getAttribute("data-src");
            let suffix = ".jpg";
            let allimarr = [];
            const that = this;
            for( let i = 0; i < imcount; i++ ) {
                let img = new Image();
                    img.src = src + i + suffix;
                    img.isloaded = false;
                    allimarr.push(img);
                    img.onload = function() {
                        img.isloaded = true;
                        if( i == 0 ) {
                            that.ctx.drawImage(img, 0, 0, img.width, img.height,
                                0, 0, that.ctx.canvas.width, that.ctx.canvas.height )
                        }
                    }
            }
            return allimarr;
        },
        setupCanvas( canvas ) {
            let dpr = window.devicePixelRatio ?
                window.devicePixelRatio :
                window.screen.deviceXDPI / window.screen.logicalXDPI || 1;
            if (dpr < 2) dpr = 2;
            canvas.width = canvas.width * dpr;
            canvas.height = canvas.height * dpr;
            let ctx = canvas.getContext('2d');
            return ctx;
        },
        thirSecAnimation: function() {
            let distance = 0;
            let smaldist = 0;
            const innerHeight = isM ? document.querySelector(".delihutxtcon").clientHeight : document.querySelector(".delicatecontent").clientHeight
            const spacebtween = $(".delicateuseSlide").eq(1).outerWidth(true) - $(".delicateuseSlide").eq(1).width();
            if( !isM ) {
                distance = ( $(".delicateuseSlide").eq(0).width() + $(".delicateuseSlide").eq(1).width() ) / 2 + spacebtween;
                smaldist = $(".delicateuseSlide").eq(1).width() + spacebtween;
            }else {
                distance = ( $(".delicateuseSlide").eq(1).width() + $(".delicateuseSlide").eq(2).width() ) / 2 + spacebtween;
                smaldist = $(".delicateuseSlide").eq(2).width() + spacebtween;
                this.delistiPostion = ( innerHeight - $(".delibottom").height() ) / 2;
                bod.style.setProperty("--delistiposition", this.delistiPostion + "px")
            }
            
            if( !isM ) {
                let arr0 = [
                    {
                        x: 0, scale: 1
                    },
                    {
                        x: 0, scale: 1
                    },
                    {
                        x: 0, scale: 1
                    },
                    {
                        x: 0, scale: 1
                    }]
    
                let arr1 = [
                    {
                        x: -distance, scale: 0.5839243
                    },
                    {
                        x: -distance,  scale: 1.71255
                    },
                    {
                        x: -smaldist, scale: 1
                    },
                    {
                        x: -smaldist, scale: 1
                    }]
    
                let arr2 = [
                    {
                        x: -distance - smaldist, scale: 0.5839243
                    },
                    {
                        x: -distance * 2, scale: 1
                    },
                    {
                        x: -smaldist - distance, scale: 1.71255
                    },
                    {
                        x: -smaldist * 2, scale: 1
                    }]
    
                let arr3 = [
                    {
                        x: -distance - smaldist - smaldist, scale: 0.5839243
                    },
                    {
                        x: -distance * 2 - smaldist, scale: 1
                    },
                    {
                        x: -smaldist - distance * 2, scale: 1
                    },
                    {
                        x: -smaldist * 2 - distance, scale: 1.71255
                    }]
    
                const delicateuseSlides = document.querySelectorAll(".delicateuseSlide");
                const video0 = document.querySelector(".delicateSlideSec video");
                const video1 = document.querySelector(".delicateSlidethi video");
                const video2 = document.querySelector(".delicateSlidefou video");
                this.thirInitScroll( delicateuseSlides, "150%", arr1, arr0, video0 );
                this.thirInitScroll( delicateuseSlides, "230%", arr2, arr1, video1, video0 );
                this.thirInitScroll( delicateuseSlides, "310%", arr3, arr2, video2, video1 );
            } else {
                let arr0 = [
                    {
                        x: 0, scale: 1
                    },
                    {
                        x: 0, scale: 1
                    },
                    {
                        x: 0, scale: 1
                    },
                    {
                        x: 0, scale: 1
                    }]
    
                let arr1 = [
                    {
                        x: -distance, scale: 0.7867383512
                    },
                    {
                        x: -distance,  scale: 1.271070615
                    },
                    {
                        x: -smaldist, scale: 1
                    },
                    {
                        x: -smaldist, scale: 1
                    }]
    
                let arr2 = [
                    {
                        x: -distance - smaldist, scale: 0.7867383512
                    },
                    {
                        x: -distance * 2, scale: 1
                    },
                    {
                        x: -smaldist - distance, scale: 1.271070615
                    },
                    {
                        x: -smaldist * 2, scale: 1
                    }]

                const  delicateuseSlides = document.querySelectorAll(".delicateuseSlidemob");
                const video0 = document.querySelector(".delicateSlideSec video");
                const video1 = document.querySelector(".delicateSlidethi video");
                const video2 = document.querySelector(".delicateSlidefou video");
                this.thirInitScroll( delicateuseSlides, "60%", arr1, arr0, video1, video0);
                this.thirInitScroll( delicateuseSlides, "160%", arr2, arr1, video2, video1 );

                const mobobserve = new hSwiObserve().initVideoPlay({
                    el : document.querySelector(".delicateSlideSec")
                })
            }

        },
        timeout: null,
        thirInitScroll: function( delicateuseSlides, duration, arr1, arr0, enterVideo, leaveVideo ) {
            const that = this;
            let thirSecScrollTrigger = ScrollTrigger.create({
                trigger: isM ? ".delitriggermob" : ".delicatetrigger",
                start: "top " + ( isM ? this.delistiPostion : "top" ),
                end: "+=" + duration,
                scrub: 0,
                onLeave: function() {
                    for( let i = 0; i < delicateuseSlides.length; i++ ) {
                        delicateuseSlides[i].style.transform = "translateX("+ arr1[i].x +"px) scale("+ arr1[i].scale +")";
                    }

                    clearTimeout(that.timeout);
                    that.timeout = null;
                    that.timeout = setTimeout(function() {
                        enterVideo.play();
                    }, 800)

                },
                onEnterBack: function() {
                    for( let i = 0; i < delicateuseSlides.length; i++ ) {
                        delicateuseSlides[i].style.transform = "translateX("+ arr0[i].x +"px) scale("+ arr0[i].scale +")";
                    }
                    clearTimeout(that.timeout);
                    that.timeout = null;
                    that.timeout = setTimeout(function() {
                        leaveVideo && leaveVideo.play();
                    }, 800)
                }
            });
        },
        simfinSwiper: function() {
            const that = this;
            const videos = document.querySelectorAll(".simfiswiper video");
            const simswiEl = document.querySelector(".simfiswiper")
            let recordIndex = 0;


            let simswiper = new Swiper(".simfiswiper", {
                    effect: "fade",
                    on: {
                        slideChange: function() {

                            recordIndex = this.activeIndex;

                            for( let i = 0; i < videos.length; i++ ) {

                                if( i == this.activeIndex ) {
                                    videos[i].play().catch(function() {
                                        videos[i].play();
                                    })
                                }else {
                                    videos[i].pause();
                                    videos[i].currentTime = 0;
                                }
                                    
                            }

                            that.simnavchange(this.activeIndex);
                        }
                    }
                });

                for( let i = 0; i < videos.length; i++ ) {
                    videos[i].addEventListener("ended", function() {
                        simswiper.slideNext();
                    })
                }

                this.simfinclick(simswiper);


              
                const obserLivefirtVideoplay = new hSwiObserve().initVideoPlay({
                    el: simswiEl
                });

                let simObserve = new IntersectionObserver(function (changes) {
                    for (let i = 0; i < changes.length; i++) {
                        if (changes[i].intersectionRatio > 0) {
                           videos[recordIndex].play().catch(function() {
                            videos[recordIndex].play();
                           })
                        }else {
                            videos[recordIndex].pause();
                        }
                    }
                }, {
                    rootMargin: -300 + "px 0px " + (-300) + "px 0px"
                })

                simObserve.observe(simswiEl)



                
        },
        simfinclick: function(simswiper) {
            const lis = Array.prototype.slice.call(document.querySelectorAll(".simfininav p"));
            for( let i = 0; i < lis.length; i++ ) {
                lis[i].addEventListener("click", function() {
                    simswiper.slideTo(i);
                })
            }
        },
        leftdistance: 0,
        btnwidth: 0,
        lis: Array.prototype.slice.call( document.querySelectorAll(".simfininav li") ),
        eps:  Array.prototype.slice.call( document.querySelectorAll(".simfingertxt p") ),
        simnavchange: function( index ) {
            this.leftdistance = 0;
            this.btnwidth = $(this.lis[index]).find("p").outerWidth(true);

            for( let i = 0; i < this.lis.length; i++ ) {
                i < index && ( this.leftdistance += $(this.lis[i]).outerWidth(true) );
                if( i == index ) {
                    this.elAddActive(this.lis[i]);
                    this.elAddActive(this.eps[i])
                }else {
                    this.elRemoveActive(this.lis[i]);
                    this.elRemoveActive(this.eps[i])
                }
            }

            $(".simovesqua").css({
                width: this.btnwidth,
                transform: "translate("+ this.leftdistance +"px, -50%)"
            })
        },
        elAddActive: function( el ) {
            el.classList.add("active");
        },
        elRemoveActive: function( el ) {
            el.classList.remove("active");
        },
        liveSwiper: function() {
            const w = window.innerWidth;
            const liveSlides = document.querySelectorAll(".liveswiper .swiper-slide");
            const liveSwiper = new Swiper(".liveswiper", {
                slidesPerView: "auto",
                observer: true, 
                speed: 1000,
                slideToClickedSlide: true,
                allowTouchMove: true,
                observeParents: true,
                watchSlidesProgress: true,
                navigation: {
                    prevEl: '.livenavlbtn',
                    nextEl: '.livenavrbtn'
                },
                on: {
                    slideChange: function() {
                        const that = this;
                        for( let i = 0; i < liveSlides.length; i++ ) {
                            slideVideo = liveSlides[i].querySelector("video");
                            slideVideo && slideVideo.pause();
                        }

                        liveSlides[this.activeIndex].querySelector("video").play().catch(function() {
                            liveSlides[that.activeIndex].querySelector("video").play();
                        })
                    }
                }
            });

            const obserLivefirtVideoplay = new hSwiObserve().initVideoPlay({
                el: document.querySelector(".liveswiper")
            });
        },
        aixiaoySwiper: function() {
            const aixiaoslides = document.querySelectorAll(".aixiaoyswiper .swiper-slide");
            let slideVideo = null;
            const aixiaoyswiper = new Swiper(".aixiaoyswiper", {
                slidesPerView: "auto",
                observer: true, 
                speed: 1000,
                allowTouchMove: true,
                observeParents: true,
                slideToClickedSlide: true,
                watchSlidesProgress: true,
                navigation: {
                    prevEl: '.aixiaoynavlbtn',
                    nextEl: '.aixiaoynavrbtn'
                },
                on: {
                    slideChange: function() {
                        const that = this;
                        for( let i = 0; i < aixiaoslides.length; i++ ) {
                            slideVideo = aixiaoslides[i].querySelector("video");
                            slideVideo && slideVideo.pause();
                        }

                        aixiaoslides[this.activeIndex].querySelector("video").play().catch(function() {
                            aixiaoslides[that.activeIndex].querySelector("video").play();
                        })
                    }
                }
            });

            new hSwiObserve().initVideoPlay({
                el: document.querySelector(".aixiaoyswiper")
            })

            this.aiXiaoVideoMethods();
        },
        aiXiaoVideoMethods: function() {

            const videos = document.querySelectorAll(".aixiaoyswiper video");
            for( let i = 0; i < videos.length; i++ ) {
                videos[i].addEventListener("play", function() {
                    $(this).parent().parent().siblings(".aicardplaybtn").find("img").removeClass("btnshow");
                    $(this).parent().parent().siblings(".aicardplaybtn").find(".pausebtn").addClass("btnshow");
                })

                videos[i].addEventListener("pause", function() {
                    $(this).parent().parent().siblings(".aicardplaybtn").find("img").removeClass("btnshow");
                    $(this).parent().parent().siblings(".aicardplaybtn").find(".playbtn").addClass("btnshow");
                })

                videos[i].addEventListener("ended", function() {
                    $(this).parent().parent().siblings(".aicardplaybtn").find("img").removeClass("btnshow");
                    $(this).parent().parent().siblings(".aicardplaybtn").find(".replaybtn").addClass("btnshow");
                })
            }

            const playbtns = document.querySelectorAll(".aicardplaybtn .playbtn");
            const replaybtns = document.querySelectorAll(".aicardplaybtn .replaybtn");
            const pausebtns = document.querySelectorAll(".aicardplaybtn .pausebtn");

            for( let i = 0; i < playbtns.length; i++ ) {
                playbtns[i].addEventListener("click", function() {
                    $(this).parent().siblings(".aicompuframe").find("video")[0].play();
                })
            }
            
            for( let i = 0; i < replaybtns.length; i++ ) {
                replaybtns[i].addEventListener("click", function() {
                    $(this).parent().siblings(".aicompuframe").find("video")[0].play();
                })
            }

            for( let i = 0; i < pausebtns.length; i++ ) {
                pausebtns[i].addEventListener("click", function() {
                    $(this).parent().siblings(".aicompuframe").find("video")[0].pause();
                })
            }
            
        },
        solvedifswiper: null,
        soldifstickposition: 0,
        solvedifSwiper: function() {
            let translaYfi = $(".soldiftxt1").outerHeight( true );
            let translaYse = translaYfi + $(".soldiftxt2").outerHeight( true );
            let txmodistance = 0;
            const videofir = document.querySelector(".firstvideo video");
            const videosec = document.querySelector(".secondvideo video");
            const fistbtncon = document.querySelector(".slovslidefirbtns");
            const secobtncon = document.querySelector(".slovslidesecbtns");

            this.solvedifswiper = new Swiper(".soldiffcultsiper", {
                effect: "fade",
                on: {
                    slideChange: function() {

                        switch(this.activeIndex) {
                            case 0: 
                                videosec.pause();
                                if( isFold || isM ) {
                                    videofir.play();
                                }else {
                                    setTimeout(function() {
                                        videofir.play();
                                    }, 1000)
                                }
                                fistbtncon.classList.add("opashow");
                                txmodistance = 0;
                                break;

                            case 1:
                                videosec.pause();
                                videofir.pause();
                                fistbtncon.classList.remove("opashow");
                                secobtncon.classList.remove("opashow");
                                txmodistance = -translaYfi;
                                break;
                            case 2:
                                videofir.pause();
                                if( isFold || isM ) {
                                    videosec.play();
                                }else {
                                    setTimeout(function() {
                                        videosec.play();
                                    }, 1000)
                                }
                                secobtncon.classList.add("opashow");
                                txmodistance = -translaYse;
                            break;
                        }

                        if( isFold || isM ) {
                            $(".soldiftxt").eq(this.activeIndex).addClass("active").siblings().removeClass("active")
                        }else {
                            bod.style.setProperty("--modistance", txmodistance +"px");
                        }
                        

                    }
                }
            });

            this.solDiffsuVideo( videofir, 
                document.querySelector(".slovslidefirbtns .slovplaybtn"), 
                document.querySelector(".slovslidefirbtns .slovreplaybtn"), 
                document.querySelector(".slovslidefirbtns .slovpause" )
            );  
            this.solDiffsuVideo( videosec, 
                document.querySelector(".slovslidesecbtns .slovplaybtn"), 
                document.querySelector(".slovslidesecbtns .slovreplaybtn"), 
                document.querySelector(".slovslidesecbtns .slovpause" )); 

            new hSwiObserve().initVideoPlay({
                el: document.querySelector(".soldiffcultsiper")
            })
            
        
        },
        solDiffsuVideo: function( video, playbtn, replaybtn, pausebtn ) {

            video.addEventListener("play", function() {
                playbtn.classList.remove("btnshow");
                replaybtn.classList.remove("btnshow");
                pausebtn.classList.add("btnshow");   
            })

            video.addEventListener("pause", function() {
                playbtn.classList.remove("btnshow");
                pausebtn.classList.remove("btnshow");
                playbtn.classList.add("btnshow");   
            })

            video.addEventListener("ended", function() {
                playbtn.classList.remove("btnshow");
                pausebtn.classList.remove("btnshow");
                replaybtn.classList.add("btnshow");   
            })

            playbtn.addEventListener("click", function() {
                video.play();
            })

            replaybtn.addEventListener("click", function() {
                video.play();
            })

            pausebtn.addEventListener("click", function() {
                video.pause();
            })
        },
        countHeight: function() {
            const innerHeight = isM ? document.querySelector(".delihutxtcon").clientHeight : document.querySelector(".delicatecontent").clientHeight;
            const mstiposition = ( innerHeight - $(".soloutcon").height() ) / 2;
            const pstiposition = ( innerHeight - $(".soldiffcultsiper").height() ) / 2;
            const firtxtheight = $(".soldiftxt1").height();
            this.soldifstickposition = isM || isFold ? mstiposition : pstiposition;
            !isM && bod.style.setProperty("--firstHeight",  firtxtheight + "px");
            bod.style.setProperty("--cardcenter", this.soldifstickposition +"px")
        },
        soldifScroll: function() {
            const that = this;
            this.initThScrollTri(parseInt( this.soldifstickposition ), "50%", 1);
            this.initThScrollTri(parseInt( this.soldifstickposition ), "100%", 2);
        },
        initThScrollTri: function(sdistance, duration, index) {
            const that = this;
            let soldifscroll = ScrollTrigger.create({
                trigger: ".latertrigger",
                start: "top " + sdistance,
                end:  "+=" + duration,
                scrub: 0, 
                onLeave: function() {
                    that.solvedifswiper.slideTo(index);
                },
                onEnterBack: function() {   
                    that.solvedifswiper.slideTo(index - 1);
                }
            });
        },
        multiFunSwiper: function() {
            const w = window.innerWidth;
            const ps = Array.prototype.slice.call(document.querySelectorAll(".multifunctxt p"));
            const multifunctconswiper = new Swiper(".multifunctconswiper", {
                slidesPerView: "auto",
                observer: true, 
                speed: 1000,
                allowTouchMove: true,
                observeParents: true,
                slideToClickedSlide: true,
                watchSlidesProgress: true,
                navigation: {
                    prevEl: '.mutifunnavlbtn',
                    nextEl: '.mutifunnavrbtn'
                },
                on: {
                    progress: function(swiper, progress) {
                        if( !isM && !isFold  ) {
                            for (i = 0; i < this.slides.length; i++) {
                                var slide = this.slides.eq(i);
                                var slideProgress = this.slides[i].progress;
                                var _o;
                                
                                if( slideProgress >= 1 ) {
                                    slide.css("opacity", 0.3);
                                } else if( slideProgress >= 0 && slideProgress < 1 ) {
                                    _o = 1 - Math.abs(slideProgress) * 0.7;
                                    slide.css("opacity", _o);
                                } else  if( slideProgress < 0 && slideProgress >= -1 ) {
                                    _o = 0.3 + (1 - Math.abs(slideProgress) ) * 0.7
                                    slide.css("opacity", _o);
                                } else if( slideProgress <= -1 ) {
                                    slide.css("opacity", 0.3);
                                }
                            }
                        }
                    },
                    setTransition: function(swiper, transition) {
                        if( !isM && !isFold  ) {
                            for (var i = 0; i < this.slides.length; i++) {
                                this.slides && this.slides.eq(i) && this.slides.eq(i).transition(transition);
                            }
                        }
                    },
                    slideChange: function() {
                        for( let i = 0; i < ps.length; i++ ) {
                            i == this.activeIndex ? ps[i].classList.add("active") : ps[i].classList.remove("active");
                        }
                    }
                }
            });
        },
        eauseSwiper: function() {
            const ps = Array.prototype.slice.call(document.querySelectorAll(".eausetxt p"));

            const videos = document.querySelectorAll(".eauseswiper video");



            const eauseswiper = new Swiper(".eauseswiper", {
                slidesPerView: "auto",
                observer: true, 
                speed: 1000,
                allowTouchMove: true,
                observeParents: true,
                slideToClickedSlide: true,
                watchSlidesProgress: true,
                navigation: {
                    prevEl: '.eauselbtn',
                    nextEl: '.eauserbtn'
                },
                on: {
                    progress: function(swiper, progress) {
                        if( !isM && !isFold ) {
                            for (i = 0; i < this.slides.length; i++) {
                                var slide = this.slides.eq(i);
                                var slideProgress = this.slides[i].progress;
                                var _o;
                                
                                if( slideProgress >= 1 ) {
                                    slide.css("opacity", 0.3);
                                } else if( slideProgress >= 0 && slideProgress < 1 ) {
                                    _o = 1 - Math.abs(slideProgress) * 0.7;
                                    slide.css("opacity", _o);
                                } else  if( slideProgress < 0 && slideProgress >= -1 ) {
                                    _o = 0.3 + (1 - Math.abs(slideProgress) ) * 0.7
                                    slide.css("opacity", _o);
                                } else if( slideProgress <= -1 ) {
                                    slide.css("opacity", 0.3);
                                }
                            }
                        }
                    },
                    setTransition: function(swiper, transition) {
                        if( !isM && !isFold ) {
                            for (var i = 0; i < this.slides.length; i++) {
                                this.slides && this.slides.eq(i) && this.slides.eq(i).transition(transition);
                            }
                        }
                    },
                    slideChange: function() {
                        const that = this;
                        for( let i = 0; i < videos.length; i++ ) {
                            videos[i] && videos[i].pause();
                        }

                        videos[this.activeIndex].play().catch(function() {
                            videos[that.activeIndex].play();
                        })

                        for( let i = 0; i < ps.length; i++ ) {
                            i == this.activeIndex ? ps[i].classList.add("active") : ps[i].classList.remove("active");
                        }
                    }
                }
            });

            new hSwiObserve().initVideoPlay({
                el: document.querySelector(".eauseswiper")
            })
            this.eaUseVideoMethods();
        },
        eaUseVideoMethods: function() {
            const videos = document.querySelectorAll(".eauseswiper video");
            for( let i = 0; i < videos.length; i++ ) {
                videos[i].addEventListener("play", function() {
                    $(this).parent().siblings(".eausebtns").find("img").removeClass("btnshow");
                    $(this).parent().siblings(".eausebtns").find(".eausepause").addClass("btnshow");
                })

                videos[i].addEventListener("pause", function() {
                    $(this).parent().siblings(".eausebtns").find("img").removeClass("btnshow");
                    $(this).parent().siblings(".eausebtns").find(".eauseplaybtn").addClass("btnshow");
                })

                videos[i].addEventListener("ended", function() {
                    $(this).parent().siblings(".eausebtns").find("img").removeClass("btnshow");
                    $(this).parent().siblings(".eausebtns").find(".eausereplaybtn").addClass("btnshow");
                })
            }

            const playbtns = document.querySelectorAll(".eausebtns .eauseplaybtn");
            const replaybtns = document.querySelectorAll(".eausebtns .eausereplaybtn");
            const pausebtns = document.querySelectorAll(".eausebtns .eausepause");

            for( let i = 0; i < playbtns.length; i++ ) {
                playbtns[i].addEventListener("click", function() {
                    $(this).parent().siblings(".povideo").find("video")[0].play();
                })
            }
            
            for( let i = 0; i < replaybtns.length; i++ ) {
                replaybtns[i].addEventListener("click", function() {
                    $(this).parent().siblings(".povideo").find("video")[0].play();
                })
            }

            for( let i = 0; i < pausebtns.length; i++ ) {
                pausebtns[i].addEventListener("click", function() {
                    $(this).parent().siblings(".povideo").find("video")[0].pause();
                })
            }
        },
        deletenum: 0,
        safecopyswiper: null,
        safeprocoSwiper: function() {
            const lbtn = document.querySelector(".safeprolbtn");
            const rbtn = document.querySelector(".safeprorbtn");
            const slides = document.querySelectorAll(".safeproswiper .swiper-slide");
            const ps = document.querySelectorAll(".safeprotxtslide p");
            const savideos = document.querySelectorAll(".safeproswiper video");
            let time = null;
            let time1 = null;

            const that = this;
            this.safecopyswiper = new Swiper(".safecopyswiper", {
                    effect: 'fade',
                    on: {
                        slideChange: function() {
                            const that1 = this;
                            for( let i = 0; i < savideos.length; i++ ) {
                                savideos[i].pause();
                            }

                            clearTimeout(time);
                            time = null;
                            time = setTimeout(function() {
                                savideos[that1.activeIndex].play().catch(function() {
                                    savideos[that1.activeIndex].play();
                                })
                            }, 600)
                    
                            if( this.activeIndex > that.deletenum ) {

                                if( that.deletenum == 2 )  return;
                                that.deletenum ++;
                                slides[that.deletenum - 1].classList.add("active");
                    
                                time1 = setTimeout(function() {
                                    $(slides[that.deletenum - 1]).css({
                                        visibility: "hidden"
                                    })  
                                }, 499 );
                                for( let i = 0; i < ps.length; i++ ) {
                                    that.deletenum == i ? 
                                    ps[i].classList.add("active") :
                                    ps[i].classList.remove("active");
                                }

                            }else if( this.activeIndex < that.deletenum ) {

                                if( that.deletenum == 0 ) return;
                                that.deletenum--;
                                $(slides[that.deletenum]).css({
                                    visibility: "visible"
                                })
                                slides[that.deletenum].classList.remove("active");
                                for( let i = 0; i < ps.length; i++ ) {
                                    that.deletenum == i ? 
                                    ps[i].classList.add("active") :
                                    ps[i].classList.remove("active");
                                }
                        
                            }

                            that.disableChange(that.deletenum, lbtn, rbtn);
                        }
                    }
            });

            lbtn.addEventListener("click", function() {
                that.safecopyswiper.slidePrev()
            })

            rbtn.addEventListener("click", function() {
                that.safecopyswiper.slideNext()
            })

            new hSwiObserve().initVideoPlay({
                el: document.querySelector(".safeproswiper")
            })

            this.safeVideoMethod();
        },
        safeVideoMethod: function() {
            const videos = document.querySelectorAll(".safeproswiper video");
            for( let i = 0; i < videos.length; i++ ) {
                videos[i].addEventListener("play", function() {
                    $(this).parents(".slideinner").find(".safeprobtns>img").removeClass("btnshow");
                    $(this).parents(".slideinner").find(".safeprobtns").find(".safepropausebtn").addClass("btnshow");
                })

                videos[i].addEventListener("pause", function() {
                    $(this).parents(".slideinner").find(".safeprobtns>img").removeClass("btnshow");
                    $(this).parents(".slideinner").find(".safeprobtns").find(".safeproplaybtn").addClass("btnshow");
                })

                videos[i].addEventListener("ended", function() {
                    $(this).parents(".slideinner").find(".safeprobtns>img").removeClass("btnshow");
                    $(this).parents(".slideinner").find(".safeprobtns").find(".safeproreplaybtn").addClass("btnshow");
                })
            }

            const playbtns = document.querySelectorAll(".safeprobtns .safeproplaybtn");
            const replaybtns = document.querySelectorAll(".safeprobtns .safeproreplaybtn");
            const pausebtns = document.querySelectorAll(".safeprobtns .safepropausebtn");

            for( let i = 0; i < playbtns.length; i++ ) {
                playbtns[i].addEventListener("click", function() {
                    $(this).parents(".slideinner").find("video")[0].play();
                })
            }
            
            for( let i = 0; i < replaybtns.length; i++ ) {
                replaybtns[i].addEventListener("click", function() {
                    $(this).parents(".slideinner").find("video")[0].play();
                })
            }

            for( let i = 0; i < pausebtns.length; i++ ) {
                pausebtns[i].addEventListener("click", function() {
                    $(this).parents(".slideinner").find("video")[0].pause();
                })
            }
        },
        disableChange: function(index, lbtn, rbtn) {
            index == 0 ? 
            lbtn.classList.add("disabled") :
            lbtn.classList.remove("disabled");
            index == 2 ? 
            rbtn.classList.add("disabled") :
            rbtn.classList.remove("disabled");
        },
        havscreenSwiper: function() {
            const that = this;
            const lis = Array.prototype.slice.call(document.querySelectorAll(".havscreenav li"));

            let havscreenswiper = new Swiper(".havscreenswiper", {
                    effect: 'fade',
                    autoplay: {
                        disableOnInteraction: false
                    },
                    on: {
                        slideChange: function() {
                            that.havsimnavchange(this.activeIndex);
                        }
                    }
                });

                havscreenswiper.autoplay.stop();

                new hSwiObserve().initElments({
                    s: havscreenswiper,
                    el: document.querySelector(".havscreenswiper")
                })

                
                for( let i = 0; i < lis.length; i++ ) {
                    lis[i].addEventListener("click", function() {
                        havscreenswiper.slideTo(i);
                    })
                }
        },
        havleftdistance: 0,
        havbtnwidth: 0,
        havlis: Array.prototype.slice.call( document.querySelectorAll(".havscreenav li") ),
        havsimnavchange: function( index ) {
            this.havleftdistance = 0;
            this.havbtnwidth = $(this.havlis[index]).find("p").outerWidth(true);

            for( let i = 0; i < this.havlis.length; i++ ) {
                i < index && ( this.havleftdistance += $(this.havlis[i]).outerWidth(true) );
                if( i == index ) {
                    this.elAddActive(this.havlis[i]);
                }else {
                    this.elRemoveActive(this.havlis[i]);
                }
            }

            $(".havmovesquare").css({
                width: this.havbtnwidth,
                transform: "translate("+ this.havleftdistance +"px, -50%)"
            })
        },
        premiumsmothmove: function() {

            const promiumAppwidth1 = $(".premiumappfir:nth-child(1)").outerWidth(true);
            const promiumAppwidth2 = $(".premiumappsec:nth-child(2)").outerWidth(true);
            const promiumAppwidth3 = $(".premiumappthi:nth-child(1)").outerWidth(true);

            const promiuMoveDirection = [
                {
                    x: 0,
                    moveEl: document.querySelector( ".promiumappfircon" ),
                    direction: "left",
                    limitDstance: -promiumAppwidth1
                },
                {
                    x: 0,
                    moveEl: document.querySelector( ".premiumappseccon" ),
                    direction: "right",
                    limitDstance: promiumAppwidth2
                },
                {
                    x: 0,
                    moveEl: document.querySelector( ".premiumappthicon" ),
                    direction: "left",
                    limitDstance: -promiumAppwidth3
                }
            ];

            let startAnimationFrame = null;
            let startTime = 0;
            let endTime = 0;
            function premiumappAnimation() {
                endTime = new Date().getTime();

                if( ( endTime - startTime ) > 15 ) {
                    startTime = endTime;
                    for( let i = 0; i < promiuMoveDirection.length; i++ ) {

                        switch(promiuMoveDirection[i].direction) {
                            case "left":
                                promiuMoveDirection[i].x <= promiuMoveDirection[i].limitDstance
                                && ( promiuMoveDirection[i].x = 0 )
                                promiuMoveDirection[i].x -= 1;
                                break;
                            case "right":
                                promiuMoveDirection[i].x >= promiuMoveDirection[i].limitDstance
                                && ( promiuMoveDirection[i].x = 0 )
                                promiuMoveDirection[i].x += 1;
                                break;
                        }
    
                        promiuMoveDirection[i].moveEl.style.transform = "translate("+ promiuMoveDirection[i].x  + "px,0)"
                    }
                } 

                startAnimationFrame = window.requestAnimationFrame(premiumappAnimation)
            }

            let walkLightObserve = new IntersectionObserver(function (e) {
                e.forEach(function (walkElemnt) {
                    if (walkElemnt.isIntersecting) {
                        premiumappAnimation();
                    } else {
                        window.cancelAnimationFrame(startAnimationFrame);
                    }
                })
            });

            walkLightObserve.observe(document.querySelector(".preminumappimcon"))

        },
        allroundScrollTri: function() {
            const allStartEl = document.querySelector(".allaroundtxtcon");
            let allroundScrollTri = ScrollTrigger.create({
                trigger: ".allaroundtxtcon",
                start:"top 70%",
                end: "top 70%",
                scrub: 0,
                onEnter: function() {
                    allStartEl.classList.add("active");
                    gsap.to(".allbackchan", 1.2, {
                        backgroundImage: "linear-gradient(90deg,#66d8fa 0%,#8fa6fa 26.11%,#bf93f6 51.23%,#f3a8b4 75.37%,#fac47c 100%)",
                    })
                },
                onEnterBack: function() {
                    allStartEl.classList.remove("active");
                    gsap.to(".allbackchan", 1.2, {
                        backgroundImage: "linear-gradient(90deg,#000 0%,#000 26.11%,#000 51.23%,#000 75.37%,#000 100%)"
                    })
                }
            });

            this.allRoundAiSeri();
            if( isM ) {
                this.allroundWalkLight();
            }
        },
        allroundWalkLight: function() {
            const labels = document.querySelectorAll(".colorlabel p");
            const lineWidth0 =  $(".alroundlabel0").outerWidth() + 
                                $(".alroundlabel1").outerWidth() + 
                                $(".alroundlabel4").outerWidth() + 200 / 720 * window.innerWidth;
            const lineWidth1 =  $(".alroundlabel2").outerWidth() + 
                                $(".alroundlabel3").outerWidth() + 
                                $(".alroundlabel7").outerWidth() + 
                                $(".alroundlabel5").outerWidth() + 300 / 720 * window.innerWidth; 
            const lineWidth2 =  $(".alroundlabel6").outerWidth() + 
                                $(".alroundlabel8").outerWidth() + 
                                $(".alroundlabel9").outerWidth() + 200 / 720 * window.innerWidth;



            let currentPostions = [];
            let labelObj = {};
            for( let i = 0; i < labels.length; i++ ) {
                labelObj = {}
                if( i == 0 || i == 1 || i == 4 ) {
                    labelObj.plus  = lineWidth0;
                }else if( i == 9 || i == 8 || i == 6 ) {
                    labelObj.plus  = lineWidth2;
                }else {
                    labelObj.plus  = lineWidth1;
                }
                labelObj.x = 0;
                labelObj.width = $(labels[i]).outerWidth();
                currentPostions.push(labelObj);
            }

            let trandistance = 0;
            let allRequestAnimation = null;
            const resizeDisatance = 100 / 720 * window.innerWidth;
            function labelsMove() {
                for( let i = 0; i < currentPostions.length; i++ ) {
                 
                    if( parseInt (labels[i].getBoundingClientRect().left) <= ( -parseInt( currentPostions[i].width )) ) {
                        trandistance = currentPostions[i].plus + resizeDisatance;
                        currentPostions[i].x += parseInt(trandistance);
                    }

                    if( i == 2 || i == 3 || i == 5 || i == 7 ) {
                        currentPostions[i].x -= 0.5;
                    }else {
                        currentPostions[i].x -= 1;
                    }

                    
                    labels[i].style.transform = "translateX("+(currentPostions[i].x)+"px)";

                }

                allRequestAnimation = window.requestAnimationFrame(labelsMove);
            }

            let allroundWalkObserve = new IntersectionObserver(function (e) {
                e.forEach(function (walkElemnt) {
                    if (walkElemnt.isIntersecting) {
                        labelsMove();
                    } else {
                        window.cancelAnimationFrame(allRequestAnimation);
                    }
                })
            });

            allroundWalkObserve.observe(document.querySelector(".colorlabel"))

        },
        allRoundAiSeri: function() {
            const allcanvas = document.querySelector("#allroucanvas");
            const canvasparent = $(".allaroundcanvas");
                  allcanvas.width = canvasparent.width();
                  allcanvas.height = canvasparent.height();
            const imsNum = 40;
            const that = this;


            let allctx = this.setupCanvas(allcanvas);
            let loadimages = [];

            PreLoad(".os-sec6", function() {
                loadimages = that.loadAllimages(allcanvas, imsNum, allctx)
            })
            
            let currentIndex = 0;
            let allrequFrame = null;
            let startTime = 0;
            let endTime = 0;

            function playimagesAnimation() {

                endTime = new Date().getTime();

                if( ( endTime - startTime )  > 45 ) {
                    startTime = endTime;
                    currentIndex ++;
                    if( currentIndex >= imsNum ) {
                        window.cancelAnimationFrame(allrequFrame);
                        return;
                    }
    
                    if( !loadimages[currentIndex] || !loadimages[currentIndex].width ) return;
                    allctx.clearRect( 0, 0, allcanvas.width, allcanvas.height );
                    allctx.drawImage(loadimages[currentIndex], 0, 0, loadimages[currentIndex].width, loadimages[currentIndex].height, 0, 0, allcanvas.width, allcanvas.height);
                }

                allrequFrame = window.requestAnimationFrame(playimagesAnimation);
            }

            if( isM ) {
                let roundScroMob = ScrollTrigger.create({
                    trigger: ".allrounmobtri",
                    start:"bottom bottom",
                    end: "bottom bottom",
                    scrub: 0,
                    onEnter: function() {
                        currentIndex = 0;
                        playimagesAnimation();
                    }
                })
            } else {

                const addName = document.querySelector(".allabelcon");
                let roundScrollTri = ScrollTrigger.create({
                    trigger: ".allroundtri",
                    start:"top 80%",
                    end: "top 80%",
                    scrub: 0,
                    onEnter: function() {
                        addName.classList.add("active");
                        startTime = new Date().getTime();
                        setTimeout(function() {
                            currentIndex = -1;
                            playimagesAnimation();
                        }, 400)
                    },
                    onEnterBack: function() {
                        addName.classList.remove("active");
                    }
                })
            }


            
        },
        loadAllimages: function(canvas, aiimount, ctx) {
            let imagesarr = [];
            let img = null;
            for( let i = 0; i < aiimount; i++ ) {
                img = new Image();
                img.src = canvas.getAttribute("data-src") + i + ".png";
                imagesarr.push(img);
                img.onload = function() {
                    if( i == 0 ) {
                        ctx.drawImage(imagesarr[i], 0, 0, imagesarr[i].width, imagesarr[i].height, 0, 0, ctx.canvas.width, ctx.canvas.height);
                    }
                }
            }
            return imagesarr;
        },
        intethScrollTri: function() { 
            const inactivel = document.querySelector(".inteventhinrim");
            const video = document.querySelector(".inteventhinrim video");
            const tovideo = document.querySelector(".inteventhinlim video");
            const inoffset =  $(".inteventhinlim").height() + $(".inteventhinrim").height() / 3
            let intethScrollTrigger = ScrollTrigger.create({
                trigger: ".inteventhinlim",
                start: "top bottom-=" + inoffset,
                end: "top bottom-=" + inoffset,
                scrub: 0,
                onEnter: function() {
                    inactivel.classList.add("active");
                    setTimeout(function() {
                        video.play();
                        tovideo.play();
                    }, 1000)
                },
                onEnterBack: function() {
                    inactivel.classList.remove("active");
                }
            });

            video.addEventListener('pause', function() {
                tovideo.pause();
            });

            video.addEventListener('timeupdate', function() {
                tovideo.playbackRate = video.playbackRate; 
            });

            tovideo.addEventListener("timeupdate", function() {
                video.playbackRate = tovideo.playbackRate; 
                video.currentTime = tovideo.currentTime;
            })

        },
        modalrecordIndex: 0,
        modalSwiper: function() {
            const that = this;
            const modallis =  Array.prototype.slice.call( document.querySelectorAll(".ostinav li") );
            const tououter = document.querySelector(".ostibsquacon").getBoundingClientRect();
            const touinner = document.querySelector(".ostinav").getBoundingClientRect();
            const limitdistan = touinner.width - tououter.width;
            const btnShadow = document.querySelector(".ostishadow");
            const modalVideos = document.querySelectorAll(".ostiswiper video");
            let modaleftdistance = 0;
            let modalbtnwidth = 0;
            let distan = 0;
            let tdis = 0;
            let scrollDistan = 0;


            let ostiswiper = new Swiper(".ostiswiper", {
                    effect: 'fade',
                    speed: 0,
                    allowTouchMove: false,
                    on: {
                        slideChange: function() {

                            that.modalrecordIndex = this.activeIndex;
                            for( let i = 0; i < modalVideos.length; i++ ) {
                                if( i == this.activeIndex ) {
                                    modalVideos[i].play().catch(function() {
                                        modalVideos[i].play();
                                    })
                                } else {
                                    modalVideos[i].pause();
                                    modalVideos[i].currentTime = 0;
                                }   
                            }

                            modaleftdistance = 0;
                            modalbtnwidth = $(modallis[this.activeIndex]).find("p").outerWidth(true);
                
                            for( let i = 0; i < modallis.length; i++ ) {
                                i < this.activeIndex && ( modaleftdistance += $(modallis[i]).outerWidth(true) );
                                if( i == this.activeIndex ) {
                                    that.elAddActive(modallis[i]);
                                } else {
                                    that.elRemoveActive(modallis[i]);
                                }
                            }

                            if( this.activeIndex == 0 ) {
                                modaleftdistance += 1;
                            } else if( this.activeIndex == 2 ) {
                                modaleftdistance -= 1;
                            } 
                
                            $(".ostimovesqa").css({
                                width: modalbtnwidth,
                                transform: "translate("+ (modaleftdistance) +"px, -50%)"
                            })


                            if( isM ) {
                                distan = $(".ostibsquacon").outerWidth() / 2;
                                tdis = 0;
                                for( let i = 0; i < this.activeIndex + 1; i++ ) {
                                    i == this.activeIndex ? 
                                    tdis += parseInt( $(modallis[i]).width()) / 2 :
                                    tdis += parseInt( $(modallis[i]).outerWidth(true));
                                }
    
                                scrollDistan = tdis - distan;
    
                                if( scrollDistan > limitdistan ) {
                                    $(".ostirarrow").hide();
                                    $(".ostilarrow").show();
                                    $(btnShadow).css({
                                        background: "linear-gradient(90deg, rgb(248, 248, 248) 12%, transparent 23%, transparent 70%, transparent 85%)"
                                    })
                                } else if( scrollDistan < 0 ) {
                                    $(".ostilarrow").hide();
                                    $(".ostirarrow").show();
                                    $(btnShadow).css({
                                        background: "linear-gradient(90deg, transparent 13%, transparent 30%, transparent 80%, rgb(248, 248, 248) 89%)"
                                    })
                                }else {
                                    $(".ostirarrow").show();
                                    $(".ostilarrow").show();
                                    $(btnShadow).css({
                                        background: "linear-gradient(90deg, rgb(248, 248, 248) 12%, transparent 23%, transparent 80%, rgb(248, 248, 248) 89%)"
                                    })
                                }
                    
                                $(".ostibsquacon").animate({ "scrollLeft": scrollDistan }, "600");
                            }
                
                        }
                    }
                });

                this.modalsiwperclick(ostiswiper)
        },
        modalsiwperclick: function(simswiper) {

            const lis = Array.prototype.slice.call(document.querySelectorAll(".ostinav p"));
            const rarrow = document.querySelector(".ostirarrow");
            const larrow = document.querySelector(".ostilarrow");

            for( let i = 0; i < lis.length; i++ ) {
                lis[i].addEventListener("click", function() { simswiper.slideTo(i); })
            }

            rarrow.addEventListener("click", function() { simswiper.slideNext(); })

            larrow.addEventListener("click", function() { simswiper.slidePrev(); })

        },
        initModalMethod: function() {
            this.osTiCloseBtn(".osclosebtnfir", ".osmodalfir");
            this.osTiCloseBtn(".osclosebtnsec", ".osmodalsec");
            this.osTiCloseBtn(".osclosebtnthr", ".osmodalthr");
            this.osTiOpenBtn(".osopenbtnfir", ".osmodalfir");
            this.osTiOpenBtn(".osopenbtnsec", ".osmodalsec");
            this.osTiOpenBtn(".osopenbtnthr", ".osmodalthr");
        },
        isOpen: false,
        osTiCloseBtn: function(closebtn, closeModal) {
            const closbtn = document.querySelector(closebtn);
            const osTiModal = document.querySelector(closeModal);
            const htmlEl = document.querySelector("html");
            const ostitranel = document.querySelector(closeModal + " .ostitranel");
            const that = this;
            closbtn.addEventListener("click", function() {
                that.isOpen = false;
                $(osTiModal).animate({
                    "opacity": 0,
                }, 600, function() {
                    bod.classList.remove("oshidden");
                    document.querySelector("html").classList.remove("oshidden");
                    htmlEl.style.paddingInlineEnd = "0px";
                    osTiModal.classList.remove("level");
                    ostitranel.classList.remove("active");
                    osTiModal.scrollTop  = 0;
                })
            })
        },
        osTiOpenBtn: function(openBtn, openModal ) {
            const ostopenbtn = document.querySelector(openBtn);
            const osTiModal = document.querySelector(openModal);
            const htmlEl = document.querySelector("html");
            const padInlinEnd = window.innerWidth - $(".hw-os").width();
            const ostitranel = document.querySelector(openModal + " .ostitranel");
            const videoplay = $(openModal).find("video")[0];
            const that = this;

            ostopenbtn.addEventListener("click", function() {
                that.isOpen = true;
                if( openBtn == ".osopenbtnfir" ) {
                    $(openModal).find("video")[that.modalrecordIndex].currentTime = 0;
                } else {
                    if( videoplay ) {
                        videoplay.currentTime = 0
                    }
                }

                bod.classList.add("oshidden");
                document.querySelector("html").classList.add("oshidden");
                osTiModal.classList.add("level");
                htmlEl.style.paddingInlineEnd = padInlinEnd + "px";
                gsap.to(osTiModal, 0.6, {
                    "opacity": 1,
                    onComplete: function() {
                        if( isUc || isWeChat ) return;

                        if( openBtn == ".osopenbtnfir" ) {
                            $(openModal).find("video")[that.modalrecordIndex] &&  $(openModal).find("video")[that.modalrecordIndex].play().catch(function() {
                                $(openModal).find("video")[that.modalrecordIndex].play();
                            })
                        }else {
                            videoplay && videoplay.play().catch(function() {
                                videoplay.play();
                            })
                        }
  
                    }
                })
                ostitranel.classList.add("active");

            })
        },
        meetDisQuestion: function() {
            const videos = document.querySelectorAll(".deepthinkim video");
            for( let i = 0; i < videos.length; i++ ) {
                videos[i].addEventListener("play", function() {
                    $(this).parents(".deepthinpartop").siblings(".deepthinreplaybtn").find("div").removeClass("btnshow");
                    $(this).parents(".deepthinpartop").siblings(".deepthinreplaybtn").find(".depthinpause").addClass("btnshow");
                })

                videos[i].addEventListener("pause", function() {
                    $(this).parents(".deepthinpartop").siblings(".deepthinreplaybtn").find("div").removeClass("btnshow");
                    $(this).parents(".deepthinpartop").siblings(".deepthinreplaybtn").find(".depthinplay").addClass("btnshow");
                })

                videos[i].addEventListener("ended", function() {
                    $(this).parents(".deepthinpartop").siblings(".deepthinreplaybtn").find("div").removeClass("btnshow");
                    $(this).parents(".deepthinpartop").siblings(".deepthinreplaybtn").find(".depthinreplay").addClass("btnshow");
                })
            }

            const playbtns = document.querySelectorAll(".deepthinreplaybtn .depthinplay");
            const replaybtns = document.querySelectorAll(".deepthinreplaybtn .depthinreplay");
            const pausebtns = document.querySelectorAll(".deepthinreplaybtn .depthinpause");

            for( let i = 0; i < playbtns.length; i++ ) {
                playbtns[i].addEventListener("click", function() {
                    $(this).parents(".deepthintobocon").find("video")[0].play();
                })
            }
            
            for( let i = 0; i < replaybtns.length; i++ ) {
                replaybtns[i].addEventListener("click", function() {
                    $(this).parents(".deepthintobocon").find("video")[0].play();
                })
            }

            for( let i = 0; i < pausebtns.length; i++ ) {
                pausebtns[i].addEventListener("click", function() {
                    $(this).parents(".deepthintobocon").find("video")[0].pause();
                })
            }

            new hSwiObserve().initVideoPlay({
                el: document.querySelector(".deepthinkim")
            })
        },
        modalvideoplay: function() {
            const   videos = document.querySelector(".osecmodalim video");

                    videos.addEventListener("play", function() {
                        $(this).parents(".osecmodalim").find(".oscondragbtn>img").removeClass("btnshow");
                        $(this).parents(".osecmodalim").find(".condrapause").addClass("btnshow");
                    })

                    videos.addEventListener("pause", function() {
                        $(this).parents(".osecmodalim").find(".oscondragbtn>img").removeClass("btnshow");
                        $(this).parents(".osecmodalim").find(".condraplay").addClass("btnshow");
                    })

                    videos.addEventListener("ended", function() {
                        $(this).parents(".osecmodalim").find(".oscondragbtn>img").removeClass("btnshow");
                        $(this).parents(".osecmodalim").find(".condrareplay").addClass("btnshow");
                    })

            const playbtns = document.querySelector(".condraplay");
            const replaybtns = document.querySelector(".condrareplay");
            const pausebtns = document.querySelector(".condrapause");

            playbtns.addEventListener("click", function() {
                $(this).parents(".osecmodalim").find("video")[0].play();
            })
        
            replaybtns.addEventListener("click", function() {
                $(this).parents(".osecmodalim").find("video")[0].play();
            })

            pausebtns.addEventListener("click", function() {
                $(this).parents(".osecmodalim").find("video")[0].pause();
            })
        },
        supClick: function() {
            const that = this;
            $(".ssup").click(function (e) {
                e = e || window.event;
                e.stopPropagation();

                let index = $(this).data("index") ? $(this).data("index") - 1 : parseInt($(this).text()) - 1;

                $('html,body').animate({
                    scrollTop: $(".last-section").find("li").eq(index).offset().top - (isIe ? 80 : naH),
                }, 500, function () {
                    that.isOpen && $(".osticlosebtn").trigger("click");

                    $('html,body').animate({
                        scrollTop: $(".last-section").find("li").eq(index).offset().top - (isIe ? 80 : naH),
                    }, 300)
                })
                $(".last-section li").eq(index).addClass("active").siblings().removeClass("active");
            })
        },
        ucwxhide: function() {
            if(isUc || isWeChat ) {
                $(".aicardplaybtn").css({
                    display: "none"
                })

                $(".deepthinreplaybtn").css({
                    display: "none"
                })

                $(".solvrebtnout").css({
                    display: "none"
                })

                $(".eausebtns").css({
                    display: "none"
                })

                $(".safeprobtns").css({
                    display: "none"
                })

                $(".oscondragbtn").css({
                    display: "none"
                })
            }
        },
        exploreBtn: function() {
            $(".ospvbtn").on("click",function(e){
                e.preventDefault();
                $(this).initH5player({
                    'path': '',
                    'target': 'fancybox',
                    'autostart': true,
                    'afterClose': function() {
                    },
                });
            })
        },
        wechartShare: function(){
            var userAgentInfo = navigator.userAgent.toLowerCase();
            var isWeixin = userAgentInfo.indexOf("micromessenger") != -1;
            if (isWeixin) {
                var imgUrl = 'https://consumer.huawei.com/content/dam/huawei-cbg-site/cn/mkt/harmonyos-computer/harmonyos-5/wx-share.jpg';
                $.getScript("//res.wx.qq.com/open/js/jweixin-1.2.0.js", function (response, status) {
                    if (status == 'success') {
                        $.getScript("//consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/store/js/cbgwechatv1.js", function (r, s) {
                            if (s == 'success') {
                                var wxShare = setInterval(function () {
                                    if (typeof (WechatShare) != "undefined") {
                                        WechatShare({
                                            url: window.location.href,
                                            img: imgUrl,
                                            title: $(document).attr('title'),
                                            descript: document.querySelector('meta[name=\"description\"]').getAttribute('content')
                                        }, function () {
                                            alert(window.digitalData.page.pageInfo.siteCode2 == 'cn' ? '谢谢分享。' : 'Thanks for sharing.');
                                        });
                                        clearInterval(wxShare)
                                    }
                                }, 150)
                            }
                        });
                    }
                });
            }
        }
    }

    hWhoreMethods.init();

    'scrollRestoration' in history && (history.scrollRestoration = 'manual');

})