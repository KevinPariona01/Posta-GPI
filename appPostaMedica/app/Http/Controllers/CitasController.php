<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cita;
use Illuminate\Support\Facades\DB;

class CitasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $citas = DB::table('citas')
                ->where('fecha', '=', $request->fecha)
                ->where('especialidad_id', '=', $request->especialidad_id)
                ->select('fecha', 'hora_inicio','hora_final','estado')
                ->get();
        
        return $citas;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'fecha' => 'required|date',
            'hora_inicio' => 'required',
            'hora_final' => 'required',
            'paciente_id' => 'required|numeric',
            'especialidad_id' => 'required|numeric',
        ]);


        $cita = new Cita;
        $cita->fecha = $request->fecha;
        $cita->hora_inicio = $request->hora_inicio;
        $cita->hora_final = $request->hora_final;
        $cita->paciente_id = $request->paciente_id;
        $cita->especialidad_id = $request->especialidad_id;
        $cita->save();

        return true;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

}
