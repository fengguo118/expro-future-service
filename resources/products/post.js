cancelUnless(me, 'You must log in', 401);

this.creatorID = me.id;
this.createdAt = new Date().getTime();