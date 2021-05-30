class Countdown {
    constructor(countdownVariables) {
        this.offerTitle = document.querySelector(countdownVariables.offerTitle);
        this.offer = document.querySelector(countdownVariables.offer);
        this.offerDays = document.querySelector(countdownVariables.offerDays);
        this.offerHours = document.querySelector(countdownVariables.offerHours);
        this.offerMinutes = document.querySelector(countdownVariables.offerMinutes);
        this.offerSeconds = document.querySelector(countdownVariables.offerSeconds);
        this.intervalID;
        this.countdown();
        this.updateOfferCountdown;
    };
    countdown() {
        const currentYear = new Date().getFullYear();
        const offerStart = new Date();
        const offerEnd = new Date(`Sun May 31 ${currentYear} 20:07:00`);
        const offerDifference = offerEnd - offerStart;
        const offerDaysLeft = Math.floor(offerDifference / 1000 / 60 / 60 / 24);
        const offerHoursLeft = Math.floor(offerDifference / 1000 / 60 / 60) % 24;
        const offerMinutesLeft = Math.floor(offerDifference / 1000 / 60) % 60;
        const offerSecondsLeft = Math.floor(offerDifference / 1000) % 60;
        this.offerDays.innerHTML = offerDaysLeft;
        this.offerHours.innerHTML = offerHoursLeft;
        this.offerMinutes.innerHTML = offerMinutesLeft;
        this.offerSeconds.innerHTML = offerSecondsLeft;
        if (offerSecondsLeft < 0) {
            this.offerTitle.innerHTML = "<h2>OFFER ENDED!</h2>";
            this.offer.remove();
            return this.clearOfferCountdown;
        };
    };
    get updateOfferCountdown() {
        return this.intervalID = setInterval(() => {
            return this.countdown();
        }, 1000);
    };
    get clearOfferCountdown() {
        return clearInterval(this.intervalID);
    };
};
const countdown = new Countdown({
    offerTitle: ".countdown__title",
    offer: ".countdown__offer",
    offerDays: ".days",
    offerHours: ".hours",
    offerMinutes: ".minutes",
    offerSeconds: ".seconds"
});