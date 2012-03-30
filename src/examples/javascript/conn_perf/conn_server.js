/*
 * Copyright 2011-2012 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

load('vertx.js')

// We set the buffer sizes small so we don't run out of RAM - each connection
// will have its own buffer

var server = new vertx.NetServer().setSendBufferSize(2048).setReceiveBufferSize(2048);

var count = 0;

server.connectHandler(function(sock) {
  new vertx.Pump(sock, sock).start();
  stdout.println("Connection " + count++);
})

server.listen(1234, 'localhost');