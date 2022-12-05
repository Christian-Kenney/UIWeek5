$(document).ready(function(){
    
	// Define variables that reference our script tags within the body of our page
	var recentLeagues = $("#recentLeagues").html();
    var sideNavigation = $("#openLeagues").html();
    var sideNavigation = $("#footer").html();
    
	// Have MustacheJS render our script tags
	Mustache.parse(recentLeagues);
	Mustache.parse(sideNavigation);
	
	// Define our data objects
	var topNav = Mustache.render(recentLeagues, {
        item:
		[
			{
                name: "Recent League 1",
                link: "#"
            },
            {
                name: "Recent League 2",
                link: "#"
            },
            {
                name: "Recent League 3",
                link: "#"
            },
            {
            name: "Recent League 4",
            link: "#"
            },
            {
            name: "Recent League 5",
            link: "#"
            }
		]
    });
	
	var sideNav = Mustache.render(openLeagues, {
        item:
		[
            {
                name: "Open League 1",
                link: "#"
            },
            {
                name: "Open League 2",
                link: "#"
            },
            {
                name: "Open League 3",
                link: "#"
            },
            {
                name: "Open League 4",
                link: "#"
            },
            {
                name: "Open League 5",
                link: "#"
            }
		]
    });

    var sideNav = Mustache.render(footer, {
        item:
            [
                {
                    name: "About Us",
                    link: "#"
                },
                {
                    name: "Common Questions",
                    link: "#"
                },
                {
                    name: "Legal",
                    link: "#"
                },
                {
                    name: "Contact",
                    link: "#"
                }
            ]
    });
	// Place data into the HTML of our page with the html() jQuery method
	$("#render_recentLeagues").html(recentLeagues);
	$("#render_openLeagues").html(openLeagues);
    $("#render_footer").html(footer);
	
	
	
});