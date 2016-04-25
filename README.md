# SharePoint-AngularJS-TS-Camp
SharePoint Add-inn con AngularJS 1.5 + TypeScritp
Se crea un Add-inn de SharePoint tipo hosted y se agregan los siguientes paquetes:

Install-Package AngularJS.Core
Install-Package AngularJS.Route
Install-Package angularjs.TypeScript.DefinitelyTyped
Install-Package jquery.TypeScript.DefinitelyTyped
Install-Package sharepoint.TypeScript.DefinitelyTyped
Install-Package microsoft-ajax.TypeScript.DefinitelyTyped
Install-Package bootstrap

Una vez que tienes creado tu proyecto en Visual Studio, selecciona Unload project
Abre el fichero de configuración del este proyecto 
y abajo, en laseccion de imports, introduce el siguiente:

<Import Project="$(MSBuildExtensionsPath32)\Microsoft\VisualStudio\v$(VisualStudioVersion)\TypeScript\Microsoft.TypeScript.targets" />

Guarda los cambios y sobre este proyecto selecciona: Load project otra vez.

De esta forma selecciona las propiedades y aparecera TypeScript en las opciones.

