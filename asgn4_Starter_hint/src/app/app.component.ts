import {Component}      from '@angular/core';
import {MyRemoteService} from './app.myremoteservice';

// This component consumes the re-usable service.
@Component({
    selector: 'my-app',
    template: `

        <!-- Submit feedback -->
        Email: <input [(ngModel)]='emailAddress'><br/>
        Feedback:  <input [(ngModel)]='feedbackMsg'>
        <button (click)='postFeedback()'>Submit Feedback</button>

        <!-- Show result from Post -->
        <div *ngIf='feedbackResponseMsg'>{{feedbackResponseMsg}}<br/>
            {{feedbackResponseStatus}}
        </div>
        <br/>
        <button (click)='convertToF()'>Get Fahrenheit</button><br/>
        <button (click)='convertToC()'>Get Celsius</button><br/>
    `,
    // Providers allow us to inject an object instance through the constructor.
    providers: [MyRemoteService]
})
export class AppComponent {
    names: Array<any>;
    remoteService: MyRemoteService;
    emailAddress: string;
    feedbackMsg: string;
    feedbackResponseMsg: string;
    feedbackResponseStatus: string;

    // Since using a provider above we can receive service.
    constructor(_remoteService: MyRemoteService) {
        this.remoteService = _remoteService;
    }

    convertToC() {
        this.remoteService.getCelsius()
            .subscribe(
                data => {
                    this.names = data;
                    let x = data['Celsius'];
                    let y = 0;
                },
                error => {
                    alert(error);
                },
                // Final Instructions.
                () => {
                    console.log('Finished');
                });
    }

    convertToF() {
        this.remoteService.getFahrenheit()
        // Subscribe to observable.
            .subscribe(
                // Success.
                data => {
                    this.names = data;
                    console.log(JSON.stringify(data));
                    let x = data['Fahrenheit'];
                    let y = 0;
                },
                // Error.
                error => {
                    alert(error);
                },
                // Final Instructions.
                () => {
                    console.log('Finished');
                });
    }

    postFeedback() {
        // Create the JavaScript object in the format
        // required by the server.
        let FeedBackObject = {
            'Email': this.emailAddress,
            'Message': this.feedbackMsg
        };

        this.remoteService.postName(FeedBackObject)
        // Subscribe to observable.
            .subscribe(
                // Success.
                data => {
                    this.feedbackResponseMsg = data['Message'];
                    this.feedbackResponseStatus = data['Status'];
                    console.log(data);
                },
                // Error.
                error => {
                    alert(error);
                },
                // Final instructions.
                () => {
                    console.log('Finished');
                });
    }
}
