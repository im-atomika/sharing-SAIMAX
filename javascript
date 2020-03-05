<html>
    <head>
        <title>Create dyanamic dropdown list in javascript</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <script language="javascript" type="text/javascript">
            function dynamicdropdown(listindex)
            {
                document.getElementById("subcategory").length = 0;
                switch (listindex)
                {
                    case "Php" :
                        document.getElementById("subcategory").options[0]=new Option("Please select framework","");
                        document.getElementById("subcategory").options[1]=new Option("Cakephp","Cakephp");
                        document.getElementById("subcategory").options[2]=new Option("Wordpress","Wordpress");
                        document.getElementById("subcategory").options[3]=new Option("Codeigniter","Codeigniter");
                        document.getElementById("subcategory").options[4]=new Option("Joomla","Joomla");
                        document.getElementById("subcategory").options[5]=new Option("Magento","Magento");
                        break;
                    
                    case "Java" :
                        document.getElementById("subcategory").options[0]=new Option("Please select framework","");
                        document.getElementById("subcategory").options[1]=new Option("Strauts","Strauts");
                        document.getElementById("subcategory").options[2]=new Option("Hibernate","Hibernate");
                        break;
                    case "Javascript" :
                        document.getElementById("subcategory").options[0]=new Option("Please select framework","");
                        document.getElementById("subcategory").options[1]=new Option("D-Jango","D-Jango");
                        document.getElementById("subcategory").options[2]=new Option("Angular","Angular");
                        document.getElementById("subcategory").options[3]=new Option("Prototype","Prototype");
                        document.getElementById("subcategory").options[4]=new Option("jQuery","jQuery");
                        document.getElementById("subcategory").options[5]=new Option("Backbone","Backbone");
                        break;
                    case "Dotnet" :
                        document.getElementById("subcategory").options[0]=new Option("Please select framework","");
                        document.getElementById("subcategory").options[1]=new Option("VbScript","VbScript");
                        break;
                }
                return true;
            }
       </script>
    </head>
    <title>Dynamic Drop Down List</title>
    <body>
        <div class="category_div" id="category_div">Please specify language:
            <select name="category" class="required-entry" id="category" onchange="javascript: dynamicdropdown(this.options[this.selectedIndex].value);">
                <option value="">Select Language</option>
                <option value="Php">Php</option>
                <option value="Java">Java</option>
                <option value="Javascript">Javascript</option>
                <option value="Dotnet">Dotnet</option>
            </select>
        </div>
        <div class="sub_category_div" id="sub_category_div">Please select framework:
            <script type="text/javascript" language="JavaScript">
                document.write('<select name="subcategory" id="subcategory"><option value="">Please select framework</option></select>')
            </script>
            <noscript>
                <select name="subcategory" id="subcategory" >
                    <option value="">Please select framework</option>
                </select>
            </noscript>
        </div>
    </body>
</html>
