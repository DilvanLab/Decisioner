java -server -Xmx4g -Dbigdata.propertyFile=/www/blazegraph/RWStore2.properties -jar /www/blazegraph/blazegraph.jar &
java -Dgrails.env=prod -jar /www/sustenagro/sustenagro-1.0.jar
