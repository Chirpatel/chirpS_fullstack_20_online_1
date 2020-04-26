var apikey ="273818594f8b46f69e57979b0cdfc7e1"
var list={
    "India":"in",
    "US":"us",
    "Australia":"au",
    "Singapore":"sg",
    "China":"cn",
    "Canada":"ca"
}

function start(country){
    var countryid=list[country];
    
    var url=`https://newsapi.org/v2/top-headlines?country=${countryid}&apiKey=${apikey}`
    $.getJSON(url,function(data){
    console.log(data)
    console.log(data['articles'][0].title);
    var element = document.getElementById('trending-news');
    var temp1 =`<li class="border_bottom_1 bold_1"><a href="${data['articles'][0].url}">${data['articles'][0].title}</a></li>`
    element.innerHTML=temp1;
    for(let i=1;i<4;i++){
        var temp1 = document.createElement('li');
        temp1.classList.add("border_bottom_1");
        
        temp1.innerHTML=`<a href="${data['articles'][i].url}">${data['articles'][i].title}</a>`;
        element.appendChild(temp1);
    }
    });
    url=`https://newsapi.org/v2/top-headlines?country=${countryid}&category=health&apiKey=${apikey}`

    $.getJSON(url,function(data){
        console.log(data);
        console.log(data['articles'][0].title);
        var element = document.getElementById('latest_stories');
        element.href=data['articles'][0].url;
        element.textContent=data['articles'][0].title;
    });
    url=`https://newsapi.org/v2/everything?q=breaking+news+${country}&sortby=publishedAt&sortBy=popularity&apiKey=${apikey}`
    $.getJSON(url,function(data){
        console.log(data);
        console.log(data['articles'][0].title);
        var element = document.getElementById('most_famous_1');
        element.href=data['articles'][0].url;
        element.textContent=data['articles'][0].title;
        var element = document.getElementById('most_famous_2');
        element.href=data['articles'][1].url;
        element.textContent=data['articles'][1].title;
        var element = document.getElementById('most_famous_3');
        element.href=data['articles'][2].url;
        element.textContent=data['articles'][2].title;
        var element = document.getElementById('most_famous_4');
        element.href=data['articles'][3].url;
        element.textContent=data['articles'][3].title;
        
    });


    url=`https://newsapi.org/v2/everything?q=breaking+news+${country}&sortby=publishedAt&sortBy=popularity&apiKey=${apikey}`
    $.getJSON(url,function(data){
        console.log(data);
        console.log(data['articles'][0].title);
        var element = document.getElementById('popular_1');
        element.href=data['articles'][0].url;
        element.textContent=data['articles'][0].title;

        element = document.getElementById('popular_2');
        element.innerHTML=`<a  href="${data['articles'][1].url}">${data['articles'][1].title}</a><p class="para_next">  ${data['articles'][1].description}</p>`
        element = document.getElementById('popular_3');
        element.innerHTML=`<a  href="${data['articles'][2].url}">${data['articles'][2].title}</a><p class="para_next">  ${data['articles'][2].description}</p>`
    });

    url=`https://newsapi.org/v2/everything?q=story+area+${country}&sortby=publishedAt&sortBy=relevancy&apiKey=${apikey}`
    $.getJSON(url,function(data){
        console.log(data)
        console.log(data['articles'][0].title);
        var element = document.getElementById('story_area');
        for(let i=0;i<7;i++){
            var temp1 = document.createElement('li');
            temp1.classList.add("border_bottom_1");
            temp1.innerHTML=`<a href="${data['articles'][i].url}">${data['articles'][i].title}</a>`;
            element.appendChild(temp1);
        }
        });


        url=`https://newsapi.org/v2/everything?q=take+deep+action+${country}&apiKey=${apikey}`
        $.getJSON(url,function(data){
            console.log(data);
            console.log(data['articles'][0].title);
            var element = document.getElementById('take_deep_1');
            element.href=data['articles'][0].url;
            element.textContent=data['articles'][0].title;
            var element = document.getElementById('take_deep_2');
            element.href=data['articles'][1].url;
            element.textContent=data['articles'][1].title;
            var element = document.getElementById('take_deep_3');
            element.href=data['articles'][2].url;
            element.textContent=data['articles'][2].title;
            var element = document.getElementById('take_deep_4');
            element.href=data['articles'][3].url;
            element.textContent=data['articles'][3].title;
            var element = document.getElementById('take_deep_5');
            element.href=data['articles'][4].url;
            element.textContent=data['articles'][4].title;
            
        });

        url=`https://newsapi.org/v2/everything?q=trending+${country}&apiKey=${apikey}`
        $.getJSON(url,function(data){
            console.log(data);
            console.log(data['articles'][0].title);
            var element = document.getElementById('trend_1');
            element.href=data['articles'][0].url;
            element.textContent=data['articles'][0].title;
            var element = document.getElementById('trend_2');
            element.href=data['articles'][1].url;
            element.textContent=data['articles'][1].title;
            var element = document.getElementById('trend_3');
            element.href=data['articles'][2].url;
            element.textContent=data['articles'][2].title;
            var element = document.getElementById('trend_4');
            element.href=data['articles'][3].url;
            element.textContent=data['articles'][3].title;
            
        });

        url=`https://newsapi.org/v2/everything?q=comments+${country}&apiKey=${apikey}`
        $.getJSON(url,function(data){
            console.log(data);
            console.log(data['articles'][0].title);
            var element = document.getElementById('comment_1');
            element.href=data['articles'][0].url;
            element.textContent=data['articles'][0].title;
            var element = document.getElementById('comment_2');
            element.href=data['articles'][1].url;
            element.textContent=data['articles'][1].title;
            var element = document.getElementById('comment_3');
            element.href=data['articles'][2].url;
            element.textContent=data['articles'][2].title;
            var element = document.getElementById('comment_4');
            element.href=data['articles'][3].url;
            element.textContent=data['articles'][3].title;
            var element = document.getElementById('comment_5');
            element.href=data['articles'][4].url;
            element.textContent=data['articles'][4].title;
            
        });

        url=`https://newsapi.org/v2/everything?q=game+${country}&apiKey=${apikey}`


        $.getJSON(url,function(data){
            console.log(data)
            console.log(data['articles'][0].title);
            var element = document.getElementById('game');
            var temp1 =`<li class="border_bottom_1 bold_1"><a href="${data['articles'][0].url}">${data['articles'][0].title}</a></li>`
            element.innerHTML=temp1;
            for(let i=1;i<4;i++){
                var temp1 = document.createElement('li');
                temp1.classList.add("border_bottom_1");
                temp1.innerHTML=`<a href="${data['articles'][i].url}">${data['articles'][i].title}</a>`;
                element.appendChild(temp1);
            }
            });
        url=`https://newsapi.org/v2/everything?q=journey+travel&apiKey=${apikey}`
        $.getJSON(url,function(data){
            console.log(data)
            console.log(data['articles'][0].title);
            var element = document.getElementById('journey');
            var temp1 =`<li class="border_bottom_1 bold_1"><a href="${data['articles'][0].url}">${data['articles'][0].title}</a></li>`
            element.innerHTML=temp1;
            for(let i=1;i<4;i++){
                var temp1 = document.createElement('li');
                temp1.classList.add("border_bottom_1");
                temp1.innerHTML=`<a href="${data['articles'][i].url}">${data['articles'][i].title}</a>`;
                element.appendChild(temp1);
            }
            });

        url=`https://newsapi.org/v2/everything?q=global+news&apiKey=${apikey}`
        $.getJSON(url,function(data){
            console.log(data)
            console.log(data['articles'][0].title);
            var element = document.getElementById('globe');
            for(let i=0;i<4;i++){
                var temp1 = document.createElement('li');
                temp1.classList.add("border_bottom_1");
                temp1.innerHTML=`<a href="${data['articles'][i].url}">${data['articles'][i].title}</a>`;
                element.appendChild(temp1);
            }
            });
        url=`https://newsapi.org/v2/everything?q=Fashion+${country}&apiKey=${apikey}`
        $.getJSON(url,function(data){
            console.log(data)
            console.log(data['articles'][0].title);
            var element = document.getElementById('fashion');
            var temp1 =`<li class="border_bottom_1 bold_1"><a href="${data['articles'][0].url}">${data['articles'][0].title}</a></li>`
            element.innerHTML=temp1;
            for(let i=1;i<4;i++){
                var temp1 = document.createElement('li');
                temp1.classList.add("border_bottom_1");
                temp1.innerHTML=`<a href="${data['articles'][i].url}">${data['articles'][i].title}</a>`;
                element.appendChild(temp1);
            }
            });

        url=`https://newsapi.org/v2/everything?q=currency+${country}&apiKey=${apikey}`
        $.getJSON(url,function(data){
            console.log(data)
            console.log(data['articles'][0].title);
            var element = document.getElementById('currency');
            var temp1 =`<li class="border_bottom_1 bold_1"><a href="${data['articles'][0].url}">${data['articles'][0].title}</a></li>`
            element.innerHTML=temp1;
            for(let i=1;i<4;i++){
                var temp1 = document.createElement('li');
                temp1.classList.add("border_bottom_1");
                temp1.innerHTML=`<a href="${data['articles'][i].url}">${data['articles'][i].title}</a>`;
                element.appendChild(temp1);
            }
            });
        
        url=`https://newsapi.org/v2/everything?q=Trending+Projects+${country}&apiKey=${apikey}`
        $.getJSON(url,function(data){
            console.log(data)
            console.log(data['articles'][0].title);
            var element = document.getElementById('project');
            var temp1 =`<li class="border_bottom_1 bold_1"><a href="${data['articles'][0].url}">${data['articles'][0].title}</a></li>`
            element.innerHTML=temp1;
            for(let i=1;i<4;i++){
                var temp1 = document.createElement('li');
                temp1.classList.add("border_bottom_1");
                temp1.innerHTML=`<a href="${data['articles'][i].url}">${data['articles'][i].title}</a>`;
                element.appendChild(temp1);
            }
            });
        };
