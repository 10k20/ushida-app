import {React, useEffect } from 'react'
import {TweenLite, TweenMax, Power2, gsap } from 'gsap';
import './Ball.scss';

const Ball = () => {

    var ball, links, buttons

    useEffect(() => {
        ball = document.querySelector(".ball");
        links = document.querySelectorAll("a")
        buttons = document.querySelectorAll("button")
    }, []);
    
    useEffect(() => {
        links.forEach(link => {
            link.addEventListener('mouseover', function() {
                ball.classList.add('ball-on-hover')
            })
            link.addEventListener('mouseout', function() {
                ball.classList.remove('ball-on-hover')
            })
        });

        buttons.forEach(button => {
            button.addEventListener('mouseover', function() {
                ball.classList.add('ball-on-hover')
            })
            button.addEventListener('mouseout', function() {
                ball.classList.remove('ball-on-hover')
            })
        });
    });

    

    
    
    var mouse = { x: 0, y: 0 };
    var pos = { x: 0, y: 0 };
    var ratio = 0.2;
    var active = false;
   

    gsap.set(ball, { xPercent: -50, yPercent: -50 });

    document.addEventListener("mousemove", mouseMove);

    function mouseMove(e) {
    mouse.x = e.pageX;
    mouse.y = e.pageY;
    }

    gsap.ticker.add(updatePosition);

    function updatePosition() {
    if (!active) {
        pos.x += (mouse.x - pos.x) * ratio;
        pos.y += (mouse.y - pos.y) * ratio;

        gsap.set(ball, { x: pos.x, y: pos.y });
    }
    }

    // $(".icon-wrap").mouseenter(function(e) {
    // TweenMax.to(this, 0.3, { scale: 2 });
    // TweenMax.to(ball, 0.3, { scale: 2 });
    // active = true;
    // });

    // $(".icon-wrap").mouseleave(function(e) {
    // TweenMax.to(this, 0.3, { scale: 1 });
    // TweenMax.to(ball, 0.3, { scale: 1 });
    // TweenMax.to(this.querySelector(".button-icon"), 0.3, { x: 0, y: 0 });
    // active = false;
    // });

    // $(".icon-wrap").mousemove(function(e) {
    // parallaxCursor(e, this, 3);
    // callParallax(e, this);
    // });

    function callParallax(e, parent) {
    parallaxIt(e, parent, parent.querySelector(".button-icon"), 10);
    }

    function parallaxIt(e, parent, target, movement) {
    var boundingRect = parent.getBoundingClientRect();
    var relX = e.pageX - boundingRect.left;
    var relY = e.pageY - boundingRect.top;

    gsap.to(target, 0.3, {
        x: (relX - boundingRect.width / 2) / boundingRect.width * movement,
        y: (relY - boundingRect.height / 2) / boundingRect.height * movement,
        ease: Power2.easeOut
    });
    }

    function parallaxCursor(e, parent, movement) {
    var rect = parent.getBoundingClientRect();
    var relX = e.pageX - rect.left;
    var relY = e.pageY - rect.top;
    pos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
    pos.y = rect.top + rect.height / 2 + (relY - rect.height / 2) / movement;
    gsap.to(ball, 0.3, { x: pos.x, y: pos.y });
    }

    return (
        <ball className="ball"></ball>
    )
}
export default Ball