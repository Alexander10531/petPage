import { Component } from '@angular/core';
import { QueryList } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';
import { ViewChildren } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';
import { GridCardComponent } from '../../pages/masonry/components/grid-card/grid-card.component';

@Component({
  selector: 'app-masonry',
  templateUrl: './masonry.component.html',
  styleUrls: ['./masonry.component.css']
})
export class MasonryComponent implements AfterViewInit{

    images! : string[];
    columnsNumber! : any[]; 
    @ViewChild('masonryContainer') masonryContainer! : ElementRef;
    @ViewChildren(GridCardComponent) childrenComponent : QueryList<GridCardComponent> | undefined;

    constructor(
        private renderer2 : Renderer2,
        private cdref : ChangeDetectorRef,
        private requestService : RequestsService){
            this.requestService.getDataImage()
            .subscribe((data) => {
                if(data.length == 0){
                    this.obtainMoreImage(this.columnsNumber.length, this.requestService.getNumberOfImages(), false )
                }
            })
    }
    
    @HostListener('window:scroll', []) 
    onWindowScroll() : void{
        if(window.pageYOffset > (this.masonryContainer.nativeElement.clientHeight / 2) ){
            if(this.images != undefined){
                this.requestService.setDataImage(this.images);
            }
        }
    }

    obtainMoreImage(numbersColumn : number, imageNumber : number, setData : boolean){
        this.requestService.getDogImage(numbersColumn * imageNumber)
            .subscribe((data) => {
                if(setData){
                    this.requestService.setDataImage(data);
                }else{
                    this.images = data;
                }        
            })
    }

    ngAfterViewInit(){
        this.columnsNumber = new Array(this.returnNColumns(this.masonryContainer.nativeElement.clientWidth));
        this.requestService.setColumnsNumber(this.columnsNumber.length);
        this.renderer2.addClass(this.masonryContainer.nativeElement, `col-${ this.columnsNumber.length }`);
        this.obtainMoreImage(this.columnsNumber.length, this.requestService.getNumberOfImages(), true);
        this.cdref.detectChanges()
    }
    
    returnNColumns(currentWidth : number) : number{
        if(currentWidth > 1000 && currentWidth < 1500){
            return 4;
        }
        if(currentWidth > 700 && currentWidth < 1000){
            return 3;
        }
        
        if(currentWidth > 400 && currentWidth < 700){
            return 2;
        }

        if(currentWidth < 400){
            return 1;
        }

        return 5 
    }

}