
# RPT de Informática

## Relación de Puestos de Trabajo **(RPT)** de Informática en la AGE (*Administración General del Estado*)

- Fuente de datos: https://transparencia.gob.es/transparencia/transparencia_Home/index/PublicidadActiva/OrganizacionYEmpleo/Relaciones-Puestos-Trabajo.html

## 1. WEB

### 1.1 - ONLINE

Consulta la web en: https://rpt.ovh 

### 1.2 - LOCAL
1.2.1 - Para ejecutar la web en local, ejecutar el comando: 
```
$ docker run -d -p 8080:80 ruben2leon/rpttai:latest
```
**EJEMPLO:**

```
ruben@Dell:~/dev/rpttai$ docker run -d -p 8080:80 ruben2leon/rpttai:latest
e844bb8ac8d038f38ec2893fa73ad5b4c3e21ac87405c6998439d526b1ce6300

ruben@Dell:~/dev/rpttai$
```

1.2.2 - Acceder a la web: http://localhost:8080/


