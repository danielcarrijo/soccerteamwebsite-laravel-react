
    <!DOCTYPE html>
    <html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>CRAC</title>
        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">

        <link href="{{ asset('css/style.css') }}" rel="stylesheet">    
        <script src="{{ asset('js/jquery.js') }}"></script>
        <script src="{{ asset('js/bootstrap.bundle.js') }}"></script>
    </head>
    <body>
        <div id="app" class="full-height"></div>
        <script src="{{ asset('js/app.js') }}"></script>
        
    </body>
    </html>