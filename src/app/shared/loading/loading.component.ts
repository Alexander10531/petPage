import { Input, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Renderer2 } from '@angular/core';


@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements AfterViewInit{

    pawElements : ElementRef[] = [];
    @Input() heigthLoading : string = "100px";
    @ViewChild('ellipse1') ellipse1! : ElementRef;
    @ViewChild('ellipse2') ellipse2! : ElementRef; 
    @ViewChild('ellipse3') ellipse3! : ElementRef; 
    @ViewChild('ellipse4') ellipse4! : ElementRef;
    @ViewChild('ellipse5') ellipse5! : ElementRef; 

    constructor(private render2 : Renderer2){}

    ngAfterViewInit(){
        this.pawElements.push(this.ellipse1, this.ellipse2, this.ellipse3, this.ellipse4, this.ellipse5);
        let i = 0; 
        setInterval(() => {
            this.cleanClass(i, "paw-fill");
            this.render2.addClass(this.pawElements[i].nativeElement, "paw-fill");
            this.pawElements.length - 1 == i ? i = 0 : i = i + 1;
        }, 50)
    }

    cleanClass(actualIndex : number, removerClass : string){
        if(actualIndex == 0){
            this.render2.removeClass(this.pawElements[this.pawElements.length - 1].nativeElement, removerClass)
            return 
        }
        this.render2.removeClass(this.pawElements[actualIndex - 1].nativeElement, removerClass)
    }

}
