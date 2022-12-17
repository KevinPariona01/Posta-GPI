<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Especialidad;
use Illuminate\Support\Facades\DB;

class EspecialidadsController extends Controller
{

    public function index(Request $request)
    {
        $especialidades = DB::table('especialidads')
        ->select('id', 'nombre')
        ->get();
        return $especialidades;
    }

}
