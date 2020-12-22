<!DOCTYPE html>
<html lang="zh-CN">
    <head>
        <title>Hacker News</title>
    </head>
    <body>
        <ul>
            {% for item in list %}
                <li>
                    <span>{{item.userName}}</span> ------ {{item}}
                </li>
            {% endfor %}    
        </ul>
    </body>
</html>