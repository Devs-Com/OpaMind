import 'dart:convert';

class Jazz {
    Jazz({
        required this.id,
        required this.jazzId,
        required this.portada,
        required this.cancion,
        required this.banda,
    });

    String id;
    int jazzId;
    String portada;
    String cancion;
    String banda;

    factory Jazz.fromJson(String str) => Jazz.fromMap(json.decode(str));

    String toJson() => json.encode(toMap());

    factory Jazz.fromMap(Map<String, dynamic> json) => Jazz(
        id: json["_id"],
        jazzId: json["jazzId"],
        portada: json["portada"],
        cancion: json["cancion"],
        banda: json["banda"],
    );

    Map<String, dynamic> toMap() => {
        "_id": id,
        "jazzId": jazzId,
        "portada": portada,
        "cancion": cancion,
        "banda": banda,
    };
}