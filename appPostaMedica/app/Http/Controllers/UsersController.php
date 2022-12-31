<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Medico;
use App\Models\Paciente;
use App\Models\Administrador;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users =  User::all();

        return $users;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $User = new User;
        $User->user = $request->user;
        $User->password = $request->password;
        $User->email = $request->email;
        $User->tipo_usuario = $request->tipo_usuario;
        $User->save();

        return $User;
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

    public function validar(Request $request)
    {
        $user =  User::where('user', '=', $request->user)->get();  
        
        if(empty($user)){
            $mensaje = "El usuario no existe";
        }
        else{
            $user =  User::where('password', '=', $request->password)->get();
            if(empty($user)){
                $mensaje = "La contraseña no es validar";
            }else{
                $tipo_usuario = User::select('tipo_usuario')
                                ->where('id','=',$user->id)
                                ->get();
                
                switch ($tipo_usuario) {
                    case 'paciente':
                        $user = Paciente::select('tipo_usuario')
                                ->where('user_id','=',$user->id)
                                ->get();
                        break;
                    case 'medico':
                        echo "i es igual a 1";
                        break;
                    case 'admin':
                        echo "i es igual a 2";
                        break;
                }
            }
        }

    }
}
