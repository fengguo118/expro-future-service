//cancelIf(this.roles.indexOf('administrator'), 'You can not create an administrotor', 401);

if(this.username.indexOf('@') !== -1) {
    this.email = this.username;
} else if(!isNaN(this.username) && this.username.length === 11) {
    this.phone = this.username;
}
this.createdAt = new Date().getTime();
