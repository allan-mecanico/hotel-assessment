import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("hotels")
 class Hotel {

   @PrimaryColumn()
	 readonly id: string;
   
   @Column() 
   name: string;
   
   @Column()
   email: string;
   
   @Column()
   address: string;
   
   @Column()
   assessment: string;
   
     @CreateDateColumn()
   created_at: Date;
   
   @UpdateDateColumn()
   updated_at: Date;

   constructor() {
     if(!this.id) {
       this.id = uuid();
     }
   }

 }
 
export { Hotel };