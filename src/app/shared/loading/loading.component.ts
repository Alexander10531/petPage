import { AfterViewInit, Input } from '@angular/core';
import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements AfterViewInit{

    @ViewChild('ellipse1') ellipse1! : ElementRef;
    @ViewChild('ellipse2') ellipse2! : ElementRef; 
    @ViewChild('ellipse3') ellipse3! : ElementRef; 
    @ViewChild('ellipse4') ellipse4! : ElementRef;
    @ViewChild('ellipse5') ellipse5! : ElementRef; 
    @ViewChild('dogPawSvg') svg! : ElementRef; 
    @Input('heigthSvg') heigthSvg!: number;

    svgElements : ElementRef[] = [];

    constructor(private render2 : Renderer2){
    }

    ngAfterViewInit(){
        console.log(this.heigthSvg)
        this.render2.setStyle(this.svg.nativeElement, 'height' , this.heigthSvg);
        let i : number = 0; 
        this.svgElements.push(this.ellipse1, this.ellipse2, this.ellipse3, this.ellipse4, this.ellipse5)
        let nameClass = 'st1DogPaw';
        setInterval(()=>{
            this.cleanClassList(nameClass, i, this.svgElements);
            this.render2.addClass(this.svgElements[i].nativeElement, nameClass)
            i == this.svgElements.length - 1 ? i = 0 : i = i + 1; 
        },300)
    }

    cleanClassList(nameClass : string, i : number, svgElements : ElementRef[]) : void{
        if(i == 0){
            i = svgElements.length;
        }
        this.render2.removeClass(this.svgElements[i - 1].nativeElement, nameClass)
    }
}
