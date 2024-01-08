export class ApiResponse{
    
    page_size: number;
    data:any;
    total_pages:number;
    total_items:number;
    statut:boolean;
    current_page:number;

    constructor(){

        this.page_size=0;
        this.data=[];
        this.total_pages=0;
        this.total_items=0;
        this.statut=true;
        this.current_page=0;
    }
}