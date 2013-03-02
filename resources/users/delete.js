if(!(me && me.roles.indexOf('administrator') !== -1)) {
    cancel('You can not delete user', 401);
}