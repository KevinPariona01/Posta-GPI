<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">

    </head>
    <body>
        <div class="container">
            <h1>Documentacion</h1>

            <h2>Citas</h2>
            <h3>Obtener citas reservadas</h3>
            <table class="table table-bordered table-striped">
                
                <tbody>
                    <tr>
                    <th>Url</th>
                    <td>http://localhost:8000/api/citas/</td>
                    </tr>
                    <tr>
                    <th>Metodo</th>
                    <td>GET</td>
                    </tr>
                </tbody>
            </table>
            <h4>Parametros</h4>
            <table class="table table-bordered">
                <thead>
                    <tr class="table-light">
                    <th scope="col">Parametro</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Ejemplo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>fecha</th>
                        <td>date('YYYY-MM-DD')</td>
                        <td>2020-10-5</td>
                    </tr>
                    <tr>
                        <th>empleado_id</th>
                        <td>Integer</td>
                        <td>1</td>
                    </tr>
                </tbody>
            </table>
        </div>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    </body>
</html>
