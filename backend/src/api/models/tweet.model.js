
module.exports = class Tweet {
       constructor(id , text, screen_name, profile_image_url ) {
        this.id = id;
        this.text = text;
        this.user = {
            screen_name: screen_name,
            profile_image_url: profile_image_url
        };       
    } 
  
}