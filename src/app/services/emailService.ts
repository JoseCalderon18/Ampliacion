import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
    providedIn: 'root'
})

export class EmailService {
    private serviceID = 'service_9inj6if';
    private templateID = 'template_aqhyjs5';
    private publicKey = '9akLVqGRfjhz8Ui5n';

    constructor() {
        emailjs.init(this.publicKey);
    }       
    
    sendEmail(data: any) {
    const templateParams = {
        from_name: data.nombre,      
        from_email: data.email,      
        asunto: data.asunto,       
        message: data.mensaje, 
        subject: data.asunto,     
        reply_to: data.email      
    };

    return emailjs.send(
        this.serviceID,
        this.templateID,
        templateParams,
        this.publicKey
    );
}
}