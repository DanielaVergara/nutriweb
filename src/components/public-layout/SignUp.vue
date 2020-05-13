<template>
    <div class="row">
        <div class="col s3">

        </div>
        <div class="col s6 teal lighten-5 z-depth-4">
            <h5 style="font-weight:bold;">EMPIEZA AQUÍ</h5>
            <div style="margin:15px;" class="row">
                <div class="input-field col s6">
                    <div class="input-field line">
                        <i class="material-icons prefix">account_circle</i>
                        <input type="text" name="names" id="names" class="validate">
                        <label for="names">Ingrese sus nombres</label>
                    </div>
                </div>
                <div class="input-field col s6">
                    <div class="input-field line">
                        <i class="material-icons prefix">account_box</i>
                        <input type="text" name="lastnames" id="lastnames" class="validate">
                        <label for="lastnames">Ingrese sus apellidos</label>
                    </div>
                </div>
                <div class="input-field col s6">
                    <div class="input-field line">
                        <i class="large material-icons prefix">date_range</i>
                        <input type="text" name="birthdate" id="birthdate" placeholder="DD/MM/AAAA" class="validate">
                        <label for="birthdate">Ingrese su fecha de nacimiento</label>
                    </div>
                </div>
                <div class="input-field col s3">
                    <div class="input-field line">
                        <i class="large material-icons prefix">accessibility</i>
                        <input type="number" min="0" name="height" id="height" placeholder="En centimetros" class="validate">
                        <label for="height">Ingrese su altura</label>
                    </div>
                </div>
                <div class="input-field col s3">
                    <div class="input-field line">
                        <i class="large material-icons prefix">accessibility</i>
                        <input type="number" min="0" name="weight" id="weight" placeholder="En kilos" class="validate">
                        <label for="weight">Ingrese su peso</label>
                    </div>
                </div>
                <div class="input-field col s12">
                    <div class="input-field line">
                        <i class="material-icons prefix">email</i>
                        <input type="text" name="email" id="email" class="validate">
                        <label for="email">Ingrese su correo</label>
                    </div>
                </div>
                <div class="col s12">
                    <button class="btn waves-effect waves-light teal" type="submit" name="action">Continuar
                        <i class="material-icons right">send</i>
                    </button>
                </div>
            </div>
        </div>
        <div class="col s3">

        </div>
    </div>
</template>