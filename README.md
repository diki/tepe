
                       _____    ____               _    ____ _____   _____    _ _ _             
                      |_   _|__|  _ \ ___   _     / \  / ___| ____| | ____|__| (_) |_ ___  _ __ 
                        | |/ _ \ |_) / _ \ (_)   / _ \| |   |  _|   |  _| / _` | | __/ _ \| '__|
                        | |  __/  __/  __/  _   / ___ \ |___| |___  | |__| (_| | | || (_) | |   
                        |_|\___|_|   \___| (_) /_/   \_\____|_____| |_____\__,_|_|\__\___/|_|   
                                                                          
                                    _ _   _       ____  _____ _____ ____  
                          __      _(_) |_| |__   / ___||  ___|_   _|  _ \ 
                          \ \ /\ / / | __| '_ \  \___ \| |_    | | | |_) |
                           \ V  V /| | |_| | | |  ___) |  _|   | | |  __/ 
                            \_/\_/ |_|\__|_| |_| |____/|_|     |_| |_|       
                                                                                                        

Inspired from Sublime Text and SSH plugin, TePe is a humble attempt to create a browser-based code editor 
together with a SFTP connection

Many thanks to https://github.com/ajaxorg/ace (this project would not exist without it) 
and https://github.com/mscdex/ssh2 (for doing heavy work on server)

##Features

    - view folders/files on your remote server
    - edit,delete files and create new ones
    - delete/create folders on your remote server
    - autocomplete (thanks to https://github.com/ajaxorg/ace/pull/1189)

##Usage

Self hosting is strongly adviced, still you can start a SFTP connection and start to use from http://editor.diki.io. 
Promise nothing kept about your connection and session, but i should warn you that no security concern taken into account on this demo,
take your own risk :/

##To install and run TePe

    $ git clone https://github.com/diki/TePe.git
    $ cd noditor
    $ npm install
    $ npm start 
    TePe should be running at http://localhost:3000

##Why did i do it? 

Because I like to create desktop like applications working on browsers.