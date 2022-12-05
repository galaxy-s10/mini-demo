(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) : factory();
})(function () {
  'use strict';

  var fails$1 = function fails(exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  var fails = fails$1;

  var functionBindNative = !fails(function () {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = function () {
      /* empty */
    }.bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != 'function' || test.hasOwnProperty('prototype');
  });

  var NATIVE_BIND = functionBindNative;

  var FunctionPrototype$2 = Function.prototype;
  var call$3 = FunctionPrototype$2.call;
  var uncurryThisWithBind =
    NATIVE_BIND && FunctionPrototype$2.bind.bind(call$3, call$3);
  var functionUncurryThis = NATIVE_BIND
    ? uncurryThisWithBind
    : function (fn) {
        return function () {
          return call$3.apply(fn, arguments);
        };
      };

  var uncurryThis$1 = functionUncurryThis;

  var objectIsPrototypeOf = uncurryThis$1({}.isPrototypeOf);

  function _typeof(obj) {
    '@babel/helpers - typeof';

    return (
      (_typeof =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (obj) {
              return typeof obj;
            }
          : function (obj) {
              return obj &&
                'function' == typeof Symbol &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj;
            }),
      _typeof(obj)
    );
  }

  var $ = _export;

  var global$2 = global$1;

  // `globalThis` object
  // https://tc39.es/ecma262/#sec-globalthis
  $(
    {
      global: true,
      forced: globalThis$1 !== global$2,
    },
    {
      globalThis: global$2,
    }
  );

  var globalThis$6 = global$2;

  var parent$s = globalThis$6;

  var globalThis$5 = parent$s;

  var parent$r = globalThis$5;

  var globalThis$4 = parent$r;

  var parent$q = globalThis$4;

  // TODO: remove from `core-js@4`

  var globalThis$3 = parent$q;

  var require$$0$v = globalThis$3;

  var globalThis$2 = require$$0$v;

  var require$$0$u = globalThis$2;

  var globalThis$1 = require$$0$u;

  var commonjsGlobal =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : typeof self !== 'undefined'
      ? self
      : {};

  function createCommonjsModule(fn) {
    var module = { exports: {} };
    return fn(module, module.exports), module.exports;
  }

  var check = function check(it) {
    return it && it.Math == Math && it;
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global$1 =
    // eslint-disable-next-line es/no-global-this -- safe
    check(
      (typeof globalThis$1 === 'undefined'
        ? 'undefined'
        : _typeof(globalThis$1)) == 'object' && globalThis$1
    ) ||
    check(
      (typeof window === 'undefined' ? 'undefined' : _typeof(window)) ==
        'object' && window
    ) ||
    // eslint-disable-next-line no-restricted-globals -- safe
    check(
      (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' &&
        self
    ) ||
    check(_typeof(commonjsGlobal) == 'object' && commonjsGlobal) ||
    // eslint-disable-next-line no-new-func -- fallback
    (function () {
      return this;
    })() ||
    Function('return this')();

  var documentAll$2 =
    (typeof document === 'undefined' ? 'undefined' : _typeof(document)) ==
      'object' && document.all;

  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
  var IS_HTMLDDA =
    typeof documentAll$2 == 'undefined' && documentAll$2 !== undefined;
  var documentAll_1 = {
    all: documentAll$2,
    IS_HTMLDDA: IS_HTMLDDA,
  };

  var $documentAll = documentAll_1;

  var documentAll$1 = $documentAll.all;

  // `IsCallable` abstract operation
  // https://tc39.es/ecma262/#sec-iscallable
  var isCallable$1 = $documentAll.IS_HTMLDDA
    ? function (argument) {
        return typeof argument == 'function' || argument === documentAll$1;
      }
    : function (argument) {
        return typeof argument == 'function';
      };

  var $String$3 = String;
  var tryToString$1 = function tryToString(argument) {
    try {
      return $String$3(argument);
    } catch (error) {
      return 'Object';
    }
  };

  var isCallable = isCallable$1;

  var tryToString = tryToString$1;

  var $TypeError$d = TypeError;

  // `Assert: IsCallable(argument) is true`
  var aCallable$1 = function aCallable(argument) {
    if (isCallable(argument)) return argument;
    throw $TypeError$d(tryToString(argument) + ' is not a function');
  };

  var documentAll = $documentAll.all;
  var isObject$1 = $documentAll.IS_HTMLDDA
    ? function (it) {
        return _typeof(it) == 'object'
          ? it !== null
          : isCallable(it) || it === documentAll;
      }
    : function (it) {
        return _typeof(it) == 'object' ? it !== null : isCallable(it);
      };

  var isObject = isObject$1;

  var $String$2 = String;
  var $TypeError$c = TypeError;

  // `Assert: Type(argument) is Object`
  var anObject$1 = function anObject(argument) {
    if (isObject(argument)) return argument;
    throw $TypeError$c($String$2(argument) + ' is not an object');
  };

  var apply$4 = functionApply;

  var aCallable = aCallable$1;

  var anObject = anObject$1;

  // MS Edge argumentsList argument is optional
  var OPTIONAL_ARGUMENTS_LIST = !fails(function () {
    // eslint-disable-next-line es/no-reflect -- required for testing
    apply$1(function () {
      /* empty */
    });
  });

  // `Reflect.apply` method
  // https://tc39.es/ecma262/#sec-reflect.apply
  $(
    {
      target: 'Reflect',
      stat: true,
      forced: OPTIONAL_ARGUMENTS_LIST,
    },
    {
      apply: function apply(target, thisArgument, argumentsList) {
        return apply$4(
          aCallable(target),
          thisArgument,
          anObject(argumentsList)
        );
      },
    }
  );

  var path$1 = {};

  var path = path$1;

  var apply$3 = path.Reflect.apply;

  var parent$p = apply$3;

  var apply$2 = parent$p;

  var require$$0$t = apply$2;

  var apply$1 = require$$0$t;

  var FunctionPrototype$1 = Function.prototype;
  var apply = FunctionPrototype$1.apply;
  var call$2 = FunctionPrototype$1.call;

  // eslint-disable-next-line es/no-reflect -- safe
  var functionApply =
    ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) ==
      'object' &&
      apply$1) ||
    (NATIVE_BIND
      ? call$2.bind(apply)
      : function () {
          return call$2.apply(apply, arguments);
        });

  var classof$2 = classofRaw;

  // `IsArray` abstract operation
  // https://tc39.es/ecma262/#sec-isarray
  // eslint-disable-next-line es/no-array-isarray -- safe
  var isArray$1 =
    Array.isArray ||
    function isArray(argument) {
      return classof$2(argument) == 'Array';
    };

  var entryVirtual$1 = function entryVirtual(CONSTRUCTOR) {
    return path[CONSTRUCTOR + 'Prototype'];
  };

  var entryVirtual = entryVirtual$1;

  var concat$3 = concat(entryVirtual('Array'));

  var isPrototypeOf = objectIsPrototypeOf;

  var method$7 = concat$3;

  var ArrayPrototype$9 = Array.prototype;
  var concat$2 = function concat$1(it) {
    var own = concat(it);
    return it === ArrayPrototype$9 ||
      (isPrototypeOf(ArrayPrototype$9, it) && own === concat(ArrayPrototype$9))
      ? method$7
      : own;
  };

  var parent$o = concat$2;

  var concat$1 = parent$o;

  var require$$0$s = concat$1;

  var concat = require$$0$s;

  // we can't use just `it == null` since of `document.all` special case
  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
  var isNullOrUndefined$1 = function isNullOrUndefined(it) {
    return it === null || it === undefined;
  };

  var isNullOrUndefined = isNullOrUndefined$1;

  var $TypeError$b = TypeError;

  // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible$1 = function requireObjectCoercible(it) {
    if (isNullOrUndefined(it)) throw $TypeError$b("Can't call method on " + it);
    return it;
  };

  var requireObjectCoercible = requireObjectCoercible$1;

  var $Object$4 = Object;

  // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject
  var toObject$1 = function toObject(argument) {
    return $Object$4(requireObjectCoercible(argument));
  };

  var trunc$3 = mathTrunc;

  // `Math.trunc` method
  // https://tc39.es/ecma262/#sec-math.trunc
  $(
    {
      target: 'Math',
      stat: true,
    },
    {
      trunc: trunc$3,
    }
  );

  var trunc$2 = path.Math.trunc;

  var parent$n = trunc$2;

  var trunc$1 = parent$n;

  var require$$0$r = trunc$1;

  var trunc = require$$0$r;

  var ceil = Math.ceil;
  var floor = Math.floor;

  // `Math.trunc` method
  // https://tc39.es/ecma262/#sec-math.trunc
  // eslint-disable-next-line es/no-math-trunc -- safe
  var mathTrunc =
    trunc ||
    function trunc(x) {
      var n = +x;
      return (n > 0 ? floor : ceil)(n);
    };

  // `ToIntegerOrInfinity` abstract operation
  // https://tc39.es/ecma262/#sec-tointegerorinfinity
  var toIntegerOrInfinity$1 = function toIntegerOrInfinity(argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc$3(number);
  };

  var toIntegerOrInfinity = toIntegerOrInfinity$1;

  var min$2 = Math.min;

  // `ToLength` abstract operation
  // https://tc39.es/ecma262/#sec-tolength
  var toLength$1 = function toLength(argument) {
    return argument > 0
      ? min$2(toIntegerOrInfinity(argument), 0x1fffffffffffff)
      : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  var toLength = toLength$1;

  // `LengthOfArrayLike` abstract operation
  // https://tc39.es/ecma262/#sec-lengthofarraylike
  var lengthOfArrayLike$1 = function lengthOfArrayLike(obj) {
    return toLength(obj.length);
  };

  var $TypeError$a = TypeError;
  var MAX_SAFE_INTEGER = 0x1fffffffffffff; // 2 ** 53 - 1 == 9007199254740991

  var doesNotExceedSafeInteger$1 = function doesNotExceedSafeInteger(it) {
    if (it > MAX_SAFE_INTEGER)
      throw $TypeError$a('Maximum allowed index exceeded');
    return it;
  };

  var call$1 = Function.prototype.call;
  var functionCall = NATIVE_BIND
    ? call$1.bind(call$1)
    : function () {
        return call$1.apply(call$1, arguments);
      };

  var aFunction = function aFunction(variable) {
    return isCallable(variable) ? variable : undefined;
  };
  var getBuiltIn$1 = function getBuiltIn(namespace, method) {
    return arguments.length < 2
      ? aFunction(path[namespace]) || aFunction(global$2[namespace])
      : (path[namespace] && path[namespace][method]) ||
          (global$2[namespace] && global$2[namespace][method]);
  };

  var $Object$3 = Object;
  var split = uncurryThis$1(''.split);

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var indexedObject = fails(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object$3('z').propertyIsEnumerable(0);
  })
    ? function (it) {
        return classof$2(it) == 'String' ? split(it, '') : $Object$3(it);
      }
    : $Object$3;

  var IndexedObject = indexedObject;

  // toObject with fallback for non-array-like ES3 strings

  var toIndexedObject$1 = function toIndexedObject(it) {
    return IndexedObject(requireObjectCoercible(it));
  };

  var addToUnscopables$1 = function addToUnscopables() {
    /* empty */
  };

  var iterators = {};

  var $propertyIsEnumerable$1 = {}.propertyIsEnumerable;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor$4 = getOwnPropertyDescriptor$2;

  // Nashorn ~ JDK8 bug
  var NASHORN_BUG =
    getOwnPropertyDescriptor$4 &&
    !$propertyIsEnumerable$1.call(
      {
        1: 2,
      },
      1
    );

  // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
  var f$7 = NASHORN_BUG
    ? function propertyIsEnumerable(V) {
        var descriptor = getOwnPropertyDescriptor$4(this, V);
        return !!descriptor && descriptor.enumerable;
      }
    : $propertyIsEnumerable$1;
  var objectPropertyIsEnumerable = {
    f: f$7,
  };

  var createPropertyDescriptor$1 = function createPropertyDescriptor(
    bitmap,
    value
  ) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value,
    };
  };

  var toObject = toObject$1;

  var hasOwnProperty = uncurryThis$1({}.hasOwnProperty);

  // `HasOwnProperty` abstract operation
  // https://tc39.es/ecma262/#sec-hasownproperty
  // eslint-disable-next-line es/no-object-hasown -- safe
  var hasOwnProperty_1 =
    Object.hasOwn ||
    function hasOwn(it, key) {
      return hasOwnProperty(toObject(it), key);
    };

  var document$1 = global$2.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS$1 = isObject(document$1) && isObject(document$1.createElement);
  var documentCreateElement$1 = function documentCreateElement(it) {
    return EXISTS$1 ? document$1.createElement(it) : {};
  };

  var DESCRIPTORS = descriptors;

  var documentCreateElement = documentCreateElement$1;

  // Thanks to IE8 for its funny defineProperty
  var ie8DomDefine =
    !DESCRIPTORS &&
    !fails(function () {
      // eslint-disable-next-line es/no-object-defineproperty -- required for testing
      return (
        defineProperty$5(documentCreateElement('div'), 'a', {
          get: function get() {
            return 7;
          },
        }).a != 7
      );
    });

  var call = functionCall;

  var propertyIsEnumerableModule = objectPropertyIsEnumerable;

  var createPropertyDescriptor = createPropertyDescriptor$1;

  var toIndexedObject = toIndexedObject$1;

  var toPropertyKey$1 = toPropertyKey;

  var hasOwn = hasOwnProperty_1;

  var IE8_DOM_DEFINE = ie8DomDefine;

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor$2 = getOwnPropertyDescriptor$2;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  var f$6 = DESCRIPTORS
    ? $getOwnPropertyDescriptor$2
    : function getOwnPropertyDescriptor(O, P) {
        O = toIndexedObject(O);
        P = toPropertyKey$1(P);
        if (IE8_DOM_DEFINE)
          try {
            return $getOwnPropertyDescriptor$2(O, P);
          } catch (error) {
            /* empty */
          }
        if (hasOwn(O, P))
          return createPropertyDescriptor(
            !call(propertyIsEnumerableModule.f, O, P),
            O[P]
          );
      };
  var objectGetOwnPropertyDescriptor = {
    f: f$6,
  };

  var require$$0$q = objectGetOwnPropertyDescriptor;

  var nativeGetOwnPropertyDescriptor$1 = require$$0$q.f;
  var FAILS_ON_PRIMITIVES$5 = fails(function () {
    nativeGetOwnPropertyDescriptor$1(1);
  });
  var FORCED$2 = !DESCRIPTORS || FAILS_ON_PRIMITIVES$5;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  $(
    {
      target: 'Object',
      stat: true,
      forced: FORCED$2,
      sham: !DESCRIPTORS,
    },
    {
      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
        return nativeGetOwnPropertyDescriptor$1(toIndexedObject(it), key);
      },
    }
  );

  var getOwnPropertyDescriptor_1 = createCommonjsModule(function (module) {
    var Object = path.Object;
    var getOwnPropertyDescriptor = (module.exports =
      function getOwnPropertyDescriptor(it, key) {
        return Object.getOwnPropertyDescriptor(it, key);
      });
    if (Object.getOwnPropertyDescriptor.sham)
      getOwnPropertyDescriptor.sham = true;
  });

  var parent$m = getOwnPropertyDescriptor_1;

  var getOwnPropertyDescriptor$3 = parent$m;

  var require$$0$p = getOwnPropertyDescriptor$3;

  var getOwnPropertyDescriptor$2 = require$$0$p;

  // V8 ~ Chrome 36-
  // https://bugs.chromium.org/p/v8/issues/detail?id=3334
  var v8PrototypeDefineBug =
    DESCRIPTORS &&
    fails(function () {
      // eslint-disable-next-line es/no-object-defineproperty -- required for testing
      return (
        defineProperty$5(
          function () {
            /* empty */
          },
          'prototype',
          {
            value: 42,
            writable: false,
          }
        ).prototype != 42
      );
    });

  var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;

  var $TypeError$9 = TypeError;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var $defineProperty$1 = defineProperty$5;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor$1 = getOwnPropertyDescriptor$2;
  var ENUMERABLE = 'enumerable';
  var CONFIGURABLE$1 = 'configurable';
  var WRITABLE = 'writable';

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  var f$5 = DESCRIPTORS
    ? V8_PROTOTYPE_DEFINE_BUG
      ? function defineProperty(O, P, Attributes) {
          anObject(O);
          P = toPropertyKey$1(P);
          anObject(Attributes);
          if (
            typeof O === 'function' &&
            P === 'prototype' &&
            'value' in Attributes &&
            WRITABLE in Attributes &&
            !Attributes[WRITABLE]
          ) {
            var current = $getOwnPropertyDescriptor$1(O, P);
            if (current && current[WRITABLE]) {
              O[P] = Attributes.value;
              Attributes = {
                configurable:
                  CONFIGURABLE$1 in Attributes
                    ? Attributes[CONFIGURABLE$1]
                    : current[CONFIGURABLE$1],
                enumerable:
                  ENUMERABLE in Attributes
                    ? Attributes[ENUMERABLE]
                    : current[ENUMERABLE],
                writable: false,
              };
            }
          }
          return $defineProperty$1(O, P, Attributes);
        }
      : $defineProperty$1
    : function defineProperty(O, P, Attributes) {
        anObject(O);
        P = toPropertyKey$1(P);
        anObject(Attributes);
        if (IE8_DOM_DEFINE)
          try {
            return $defineProperty$1(O, P, Attributes);
          } catch (error) {
            /* empty */
          }
        if ('get' in Attributes || 'set' in Attributes)
          throw $TypeError$9('Accessors not supported');
        if ('value' in Attributes) O[P] = Attributes.value;
        return O;
      };
  var objectDefineProperty = {
    f: f$5,
  };

  var definePropertyModule = objectDefineProperty;

  var defineProperty$7 = definePropertyModule.f;

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  $(
    {
      target: 'Object',
      stat: true,
      forced: defineProperty$5 !== defineProperty$7,
      sham: !DESCRIPTORS,
    },
    {
      defineProperty: defineProperty$7,
    }
  );

  var defineProperty_1 = createCommonjsModule(function (module) {
    var Object = path.Object;
    var defineProperty = (module.exports = function defineProperty(
      it,
      key,
      desc
    ) {
      return Object.defineProperty(it, key, desc);
    });
    if (Object.defineProperty.sham) defineProperty.sham = true;
  });

  var parent$l = defineProperty_1;

  var defineProperty$6 = parent$l;

  var require$$0$o = defineProperty$6;

  var defineProperty$5 = require$$0$o;

  // Detect IE8's incomplete defineProperty implementation
  var descriptors = !fails(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return (
      defineProperty$5({}, 1, {
        get: function get() {
          return 7;
        },
      })[1] != 7
    );
  });

  var createNonEnumerableProperty$1 = DESCRIPTORS
    ? function (object, key, value) {
        return definePropertyModule.f(
          object,
          key,
          createPropertyDescriptor(1, value)
        );
      }
    : function (object, key, value) {
        object[key] = value;
        return object;
      };

  var createNonEnumerableProperty = createNonEnumerableProperty$1;

  var defineBuiltIn$1 = function defineBuiltIn(target, key, value, options) {
    if (options && options.enumerable) target[key] = value;
    else createNonEnumerableProperty(target, key, value);
    return target;
  };

  var defineBuiltIn = defineBuiltIn$1;

  var defineBuiltIns$1 = function defineBuiltIns(target, src, options) {
    for (var key in src) {
      if (options && options.unsafe && target[key]) target[key] = src[key];
      else defineBuiltIn(target, key, src[key], options);
    }
    return target;
  };

  var max$3 = Math.max;
  var min$1 = Math.min;

  // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
  var toAbsoluteIndex$1 = function toAbsoluteIndex(index, length) {
    var integer = toIntegerOrInfinity(index);
    return integer < 0 ? max$3(integer + length, 0) : min$1(integer, length);
  };

  var isArray = isArray$1;

  var $TypeError$8 = TypeError;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor$1 = getOwnPropertyDescriptor$2;

  // Safari < 13 does not throw an error in this case
  var SILENT_ON_NON_WRITABLE_LENGTH_SET =
    DESCRIPTORS &&
    !(function () {
      // makes no sense without proper strict mode support
      if (this !== undefined) return true;
      try {
        // eslint-disable-next-line es/no-object-defineproperty -- safe
        defineProperty$5([], 'length', {
          writable: false,
        }).length = 1;
      } catch (error) {
        return error instanceof TypeError;
      }
    })();
  var arraySetLength = SILENT_ON_NON_WRITABLE_LENGTH_SET
    ? function (O, length) {
        if (isArray(O) && !getOwnPropertyDescriptor$1(O, 'length').writable) {
          throw $TypeError$8('Cannot set read only .length');
        }
        return (O.length = length);
      }
    : function (O, length) {
        return (O.length = length);
      };

  var isConstructor$1 = isConstructor;

  var wellKnownSymbol$1 = wellKnownSymbol;

  var SPECIES$2 = wellKnownSymbol$1('species');
  var $Array$2 = Array;

  // a part of `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate
  var arraySpeciesConstructor$1 = function arraySpeciesConstructor(
    originalArray
  ) {
    var C;
    if (isArray(originalArray)) {
      C = originalArray.constructor;
      // cross-realm fallback
      if (isConstructor$1(C) && (C === $Array$2 || isArray(C.prototype)))
        C = undefined;
      else if (isObject(C)) {
        C = C[SPECIES$2];
        if (C === null) C = undefined;
      }
    }
    return C === undefined ? $Array$2 : C;
  };

  var arraySpeciesConstructor = arraySpeciesConstructor$1;

  // `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate
  var arraySpeciesCreate$1 = function arraySpeciesCreate(
    originalArray,
    length
  ) {
    return new (arraySpeciesConstructor(originalArray))(
      length === 0 ? 0 : length
    );
  };

  var $TypeError$7 = TypeError;
  var deletePropertyOrThrow$1 = function deletePropertyOrThrow(O, P) {
    if (!delete O[P])
      throw $TypeError$7(
        'Cannot delete property ' + tryToString(P) + ' of ' + tryToString(O)
      );
  };

  var getBuiltIn = getBuiltIn$1;

  var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

  var userAgent = engineUserAgent;

  var process = global$2.process;
  var Deno = global$2.Deno;
  var versions = (process && process.versions) || (Deno && Deno.version);
  var v8 = versions && versions.v8;
  var match, version;
  if (v8) {
    match = v8.split('.');
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
  }

  // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
  // so check `userAgent` even if `.v8` exists, but 0
  if (!version && userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
      match = userAgent.match(/Chrome\/(\d+)/);
      if (match) version = +match[1];
    }
  }
  var engineV8Version = version;

  var V8_VERSION = engineV8Version;

  var SPECIES$1 = wellKnownSymbol$1('species');
  var arrayMethodHasSpeciesSupport$1 = function arrayMethodHasSpeciesSupport(
    METHOD_NAME
  ) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return (
      V8_VERSION >= 51 ||
      !fails(function () {
        var array = [];
        var constructor = (array.constructor = {});
        constructor[SPECIES$1] = function () {
          return {
            foo: 1,
          };
        };
        return array[METHOD_NAME](Boolean).foo !== 1;
      })
    );
  };

  var toAbsoluteIndex = toAbsoluteIndex$1;

  var lengthOfArrayLike = lengthOfArrayLike$1;

  var setArrayLength = arraySetLength;

  var doesNotExceedSafeInteger = doesNotExceedSafeInteger$1;

  var arraySpeciesCreate = arraySpeciesCreate$1;

  var createProperty$1 = createProperty;

  var deletePropertyOrThrow = deletePropertyOrThrow$1;

  var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$1;

  var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport('splice');
  var max$2 = Math.max;
  var min = Math.min;

  // `Array.prototype.splice` method
  // https://tc39.es/ecma262/#sec-array.prototype.splice
  // with adding support of @@species
  $(
    {
      target: 'Array',
      proto: true,
      forced: !HAS_SPECIES_SUPPORT$1,
    },
    {
      splice: function splice(start, deleteCount /* , ...items */) {
        var O = toObject(this);
        var len = lengthOfArrayLike(O);
        var actualStart = toAbsoluteIndex(start, len);
        var argumentsLength = arguments.length;
        var insertCount, actualDeleteCount, A, k, from, to;
        if (argumentsLength === 0) {
          insertCount = actualDeleteCount = 0;
        } else if (argumentsLength === 1) {
          insertCount = 0;
          actualDeleteCount = len - actualStart;
        } else {
          insertCount = argumentsLength - 2;
          actualDeleteCount = min(
            max$2(toIntegerOrInfinity(deleteCount), 0),
            len - actualStart
          );
        }
        doesNotExceedSafeInteger(len + insertCount - actualDeleteCount);
        A = arraySpeciesCreate(O, actualDeleteCount);
        for (k = 0; k < actualDeleteCount; k++) {
          from = actualStart + k;
          if (from in O) createProperty$1(A, k, O[from]);
        }
        A.length = actualDeleteCount;
        if (insertCount < actualDeleteCount) {
          for (k = actualStart; k < len - actualDeleteCount; k++) {
            from = k + actualDeleteCount;
            to = k + insertCount;
            if (from in O) O[to] = O[from];
            else deletePropertyOrThrow(O, to);
          }
          for (k = len; k > len - actualDeleteCount + insertCount; k--) {
            deletePropertyOrThrow(O, k - 1);
          }
        } else if (insertCount > actualDeleteCount) {
          for (k = len - actualDeleteCount; k > actualStart; k--) {
            from = k + actualDeleteCount - 1;
            to = k + insertCount - 1;
            if (from in O) O[to] = O[from];
            else deletePropertyOrThrow(O, to);
          }
        }
        for (k = 0; k < insertCount; k++) {
          O[k + actualStart] = arguments[k + 2];
        }
        setArrayLength(O, len - actualDeleteCount + insertCount);
        return A;
      },
    }
  );

  var splice$4 = splice$1(entryVirtual('Array'));

  var method$6 = splice$4;

  var ArrayPrototype$8 = Array.prototype;
  var splice$3 = function splice(it) {
    var own = splice$1(it);
    return it === ArrayPrototype$8 ||
      (isPrototypeOf(ArrayPrototype$8, it) &&
        own === splice$1(ArrayPrototype$8))
      ? method$6
      : own;
  };

  var parent$k = splice$3;

  var splice$2 = parent$k;

  var require$$0$n = splice$2;

  var splice$1 = require$$0$n;

  var hiddenKeys$2 = {};

  var $Array$1 = Array;
  var max$1 = Math.max;
  var arraySliceSimple = function arraySliceSimple(O, start, end) {
    var length = lengthOfArrayLike(O);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    var result = $Array$1(max$1(fin - k, 0));
    for (var n = 0; k < fin; k++, n++) {
      createProperty$1(result, n, O[k]);
    }
    result.length = n;
    return result;
  };

  var getOwnPropertyNamesModule = objectGetOwnPropertyNames;

  var arraySlice$1 = arraySliceSimple;

  var $getOwnPropertyNames$1 = getOwnPropertyNamesModule.f;
  var windowNames =
    (typeof window === 'undefined' ? 'undefined' : _typeof(window)) ==
      'object' &&
    window &&
    _Object$getOwnPropertyNames
      ? _Object$getOwnPropertyNames(window)
      : [];
  var getWindowNames = function getWindowNames(it) {
    try {
      return $getOwnPropertyNames$1(it);
    } catch (error) {
      return arraySlice$1(windowNames);
    }
  };

  // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
  var f$4 = function getOwnPropertyNames(it) {
    return windowNames && classof$2(it) == 'Window'
      ? getWindowNames(it)
      : $getOwnPropertyNames$1(toIndexedObject(it));
  };
  var objectGetOwnPropertyNamesExternal = {
    f: f$4,
  };

  var getOwnPropertyNamesExternal = objectGetOwnPropertyNamesExternal;

  var getOwnPropertyNames$3 = getOwnPropertyNamesExternal.f;

  // eslint-disable-next-line es/no-object-getownpropertynames -- required for testing
  var FAILS_ON_PRIMITIVES$4 = fails(function () {
    return !_Object$getOwnPropertyNames(1);
  });

  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  $(
    {
      target: 'Object',
      stat: true,
      forced: FAILS_ON_PRIMITIVES$4,
    },
    {
      getOwnPropertyNames: getOwnPropertyNames$3,
    }
  );

  var Object$1 = path.Object;
  var getOwnPropertyNames$2 = function getOwnPropertyNames(it) {
    return Object$1.getOwnPropertyNames(it);
  };

  var parent$j = getOwnPropertyNames$2;

  var getOwnPropertyNames$1 = parent$j;

  var require$$0$m = getOwnPropertyNames$1;

  var getOwnPropertyNames = require$$0$m;
  var _Object$getOwnPropertyNames = getOwnPropertyNames;

  // `Array.prototype.{ indexOf, includes }` methods implementation
  var createMethod$2 = function createMethod(IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject($this);
      var length = lengthOfArrayLike(O);
      var index = toAbsoluteIndex(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare -- NaN check
      if (IS_INCLUDES && el != el)
        while (length > index) {
          value = O[index++];
          // eslint-disable-next-line no-self-compare -- NaN check
          if (value != value) return true;
          // Array#indexOf ignores holes, Array#includes - not
        }
      else
        for (; length > index; index++) {
          if ((IS_INCLUDES || index in O) && O[index] === el)
            return IS_INCLUDES || index || 0;
        }
      return !IS_INCLUDES && -1;
    };
  };
  var arrayIncludes = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod$2(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod$2(false),
  };

  var arrayMethodIsStrict$1 = function arrayMethodIsStrict(
    METHOD_NAME,
    argument
  ) {
    var method = [][METHOD_NAME];
    return (
      !!method &&
      fails(function () {
        // eslint-disable-next-line no-useless-call -- required for testing
        method.call(
          null,
          argument ||
            function () {
              return 1;
            },
          1
        );
      })
    );
  };

  var uncurryThis = functionUncurryThisClause;

  var require$$0$l = arrayIncludes;

  var arrayMethodIsStrict = arrayMethodIsStrict$1;

  /* eslint-disable es/no-array-prototype-indexof -- required for testing */

  var $indexOf = indexOf$1(require$$0$l);
  var nativeIndexOf = uncurryThis(indexOf$1([]));
  var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
  var STRICT_METHOD = arrayMethodIsStrict('indexOf');

  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  $(
    {
      target: 'Array',
      proto: true,
      forced: NEGATIVE_ZERO || !STRICT_METHOD,
    },
    {
      indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
        var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
        return NEGATIVE_ZERO
          ? // convert -0 to +0
            nativeIndexOf(this, searchElement, fromIndex) || 0
          : $indexOf(this, searchElement, fromIndex);
      },
    }
  );

  var indexOf$4 = indexOf$1(entryVirtual('Array'));

  var method$5 = indexOf$4;

  var ArrayPrototype$7 = Array.prototype;
  var indexOf$3 = function indexOf(it) {
    var own = indexOf$1(it);
    return it === ArrayPrototype$7 ||
      (isPrototypeOf(ArrayPrototype$7, it) &&
        own === indexOf$1(ArrayPrototype$7))
      ? method$5
      : own;
  };

  var parent$i = indexOf$3;

  var indexOf$2 = parent$i;

  var require$$0$k = indexOf$2;

  var indexOf$1 = require$$0$k;

  var hiddenKeys$1 = hiddenKeys$2;

  var indexOf = indexOf$1(require$$0$l);
  var push$2 = uncurryThis$1([].push);
  var objectKeysInternal = function objectKeysInternal(object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) {
      !hasOwn(hiddenKeys$1, key) && hasOwn(O, key) && push$2(result, key);
    }
    // Don't enum bug & hidden keys
    while (names.length > i) {
      if (hasOwn(O, (key = names[i++]))) {
        ~indexOf(result, key) || push$2(result, key);
      }
    }
    return result;
  };

  // IE8- don't enum bug keys
  var enumBugKeys$1 = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf',
  ];

  var internalObjectKeys = objectKeysInternal;

  var enumBugKeys = enumBugKeys$1;

  var hiddenKeys = concat(enumBugKeys).call(enumBugKeys, 'length', 'prototype');

  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  // eslint-disable-next-line es/no-object-getownpropertynames -- safe
  var f$3 =
    _Object$getOwnPropertyNames ||
    function getOwnPropertyNames(O) {
      return internalObjectKeys(O, hiddenKeys);
    };
  var objectGetOwnPropertyNames = {
    f: f$3,
  };

  var isExtensible$3 = objectIsExtensible;

  // `Object.isExtensible` method
  // https://tc39.es/ecma262/#sec-object.isextensible
  // eslint-disable-next-line es/no-object-isextensible -- safe
  $(
    {
      target: 'Object',
      stat: true,
      forced: isExtensible !== isExtensible$3,
    },
    {
      isExtensible: isExtensible$3,
    }
  );

  var isExtensible$2 = path.Object.isExtensible;

  var parent$h = isExtensible$2;

  var isExtensible$1 = parent$h;

  var require$$0$j = isExtensible$1;

  var isExtensible = require$$0$j;

  // FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it

  var arrayBufferNonExtensible = fails(function () {
    if (typeof ArrayBuffer == 'function') {
      var buffer = new ArrayBuffer(8);
      // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
      if (isExtensible(buffer))
        defineProperty$5(buffer, 'a', {
          value: 8,
        });
    }
  });

  var ARRAY_BUFFER_NON_EXTENSIBLE = arrayBufferNonExtensible;

  // eslint-disable-next-line es/no-object-isextensible -- safe
  var $isExtensible = isExtensible;
  var FAILS_ON_PRIMITIVES$3 = fails(function () {
    $isExtensible(1);
  });

  // `Object.isExtensible` method
  // https://tc39.es/ecma262/#sec-object.isextensible
  var objectIsExtensible =
    FAILS_ON_PRIMITIVES$3 || ARRAY_BUFFER_NON_EXTENSIBLE
      ? function isExtensible(it) {
          if (!isObject(it)) return false;
          if (ARRAY_BUFFER_NON_EXTENSIBLE && classof$2(it) == 'ArrayBuffer')
            return false;
          return $isExtensible ? $isExtensible(it) : true;
        }
      : $isExtensible;

  var id$1 = 0;
  var postfix = Math.random();
  var toString$4 = uncurryThis$1((1.0).toString);
  var uid$1 = function uid(key) {
    return (
      'Symbol(' +
      (key === undefined ? '' : key) +
      ')_' +
      toString$4(++id$1 + postfix, 36)
    );
  };

  var InternalMetadataModule = internalMetadata;

  var FREEZING = freezing;

  var onFreeze = InternalMetadataModule.onFreeze;

  // eslint-disable-next-line es/no-object-preventextensions -- safe
  var $preventExtensions = preventExtensions;
  var FAILS_ON_PRIMITIVES$2 = fails(function () {
    $preventExtensions(1);
  });

  // `Object.preventExtensions` method
  // https://tc39.es/ecma262/#sec-object.preventextensions
  $(
    {
      target: 'Object',
      stat: true,
      forced: FAILS_ON_PRIMITIVES$2,
      sham: !FREEZING,
    },
    {
      preventExtensions: function preventExtensions(it) {
        return $preventExtensions && isObject(it)
          ? $preventExtensions(onFreeze(it))
          : it;
      },
    }
  );

  var preventExtensions$2 = path.Object.preventExtensions;

  var parent$g = preventExtensions$2;

  var preventExtensions$1 = parent$g;

  var require$$0$i = preventExtensions$1;

  var preventExtensions = require$$0$i;

  var freezing = !fails(function () {
    // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
    return isExtensible(preventExtensions({}));
  });

  var uid = uid$1;

  var internalMetadata = createCommonjsModule(function (module) {
    var defineProperty = definePropertyModule.f;
    var REQUIRED = false;
    var METADATA = uid('meta');
    var id = 0;
    var setMetadata = function setMetadata(it) {
      defineProperty(it, METADATA, {
        value: {
          objectID: 'O' + id++,
          // object ID
          weakData: {}, // weak collections IDs
        },
      });
    };

    var fastKey = function fastKey(it, create) {
      // return a primitive with prefix
      if (!isObject(it))
        return _typeof(it) == 'symbol'
          ? it
          : (typeof it == 'string' ? 'S' : 'P') + it;
      if (!hasOwn(it, METADATA)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible$3(it)) return 'F';
        // not necessary to add metadata
        if (!create) return 'E';
        // add missing metadata
        setMetadata(it);
        // return object ID
      }
      return it[METADATA].objectID;
    };
    var getWeakData = function getWeakData(it, create) {
      if (!hasOwn(it, METADATA)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible$3(it)) return true;
        // not necessary to add metadata
        if (!create) return false;
        // add missing metadata
        setMetadata(it);
        // return the store of weak collections IDs
      }
      return it[METADATA].weakData;
    };

    // add metadata on freeze-family methods calling
    var onFreeze = function onFreeze(it) {
      if (FREEZING && REQUIRED && isExtensible$3(it) && !hasOwn(it, METADATA))
        setMetadata(it);
      return it;
    };
    var enable = function enable() {
      meta.enable = function () {
        /* empty */
      };
      REQUIRED = true;
      var getOwnPropertyNames = getOwnPropertyNamesModule.f;
      var splice = uncurryThis$1(splice$1([]));
      var test = {};
      test[METADATA] = 1;

      // prevent exposing of metadata key
      if (getOwnPropertyNames(test).length) {
        getOwnPropertyNamesModule.f = function (it) {
          var result = getOwnPropertyNames(it);
          for (var i = 0, length = result.length; i < length; i++) {
            if (result[i] === METADATA) {
              splice(result, i, 1);
              break;
            }
          }
          return result;
        };
        $(
          {
            target: 'Object',
            stat: true,
            forced: true,
          },
          {
            getOwnPropertyNames: getOwnPropertyNamesExternal.f,
          }
        );
      }
    };
    var meta = (module.exports = {
      enable: enable,
      fastKey: fastKey,
      getWeakData: getWeakData,
      onFreeze: onFreeze,
    });
    hiddenKeys$1[METADATA] = true;
  });

  // iterable DOM collections
  // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
  var domIterables = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0,
  };

  var DOMIterables$2 = domIterables;

  var classof$1 = classof;

  var Iterators = iterators;

  var TO_STRING_TAG$3 = wellKnownSymbol$1('toStringTag');
  for (var COLLECTION_NAME in DOMIterables$2) {
    var Collection = global$2[COLLECTION_NAME];
    var CollectionPrototype = Collection && Collection.prototype;
    if (
      CollectionPrototype &&
      classof$1(CollectionPrototype) !== TO_STRING_TAG$3
    ) {
      createNonEnumerableProperty(
        CollectionPrototype,
        TO_STRING_TAG$3,
        COLLECTION_NAME
      );
    }
    Iterators[COLLECTION_NAME] = Iterators.Array;
  }

  var entries$3 = entries(entryVirtual('Array'));

  var parent$f = entries$3;

  var entries$2 = parent$f;

  var method$4 = entries$2;

  var ArrayPrototype$6 = Array.prototype;
  var DOMIterables$1 = {
    DOMTokenList: true,
    NodeList: true,
  };
  var entries$1 = function entries$1(it) {
    var own = entries(it);
    return it === ArrayPrototype$6 ||
      (isPrototypeOf(ArrayPrototype$6, it) &&
        own === entries(ArrayPrototype$6)) ||
      hasOwn(DOMIterables$1, classof$1(it))
      ? method$4
      : own;
  };

  var require$$0$h = entries$1;

  var entries = require$$0$h;

  var bind$1 = uncurryThis(uncurryThis.bind);

  // optional / simple context binding
  var functionBindContext = function functionBindContext(fn, that) {
    aCallable(fn);
    return that === undefined
      ? fn
      : NATIVE_BIND
      ? bind$1(fn, that)
      : function () /* ...args */
        {
          return fn.apply(that, arguments);
        };
  };

  var ITERATOR$3 = wellKnownSymbol$1('iterator');
  var ArrayPrototype$5 = Array.prototype;

  // check on default Array iterator
  var isArrayIteratorMethod$1 = function isArrayIteratorMethod(it) {
    return (
      it !== undefined &&
      (Iterators.Array === it || ArrayPrototype$5[ITERATOR$3] === it)
    );
  };

  // `GetMethod` abstract operation
  // https://tc39.es/ecma262/#sec-getmethod
  var getMethod$1 = function getMethod(V, P) {
    var func = V[P];
    return isNullOrUndefined(func) ? undefined : aCallable(func);
  };

  var getMethod = getMethod$1;

  var ITERATOR$2 = wellKnownSymbol$1('iterator');
  var getIteratorMethod$1 = function getIteratorMethod(it) {
    if (!isNullOrUndefined(it))
      return (
        getMethod(it, ITERATOR$2) ||
        getMethod(it, '@@iterator') ||
        Iterators[classof$1(it)]
      );
  };

  var getIteratorMethod = getIteratorMethod$1;

  var $TypeError$6 = TypeError;
  var getIterator$1 = function getIterator(argument, usingIterator) {
    var iteratorMethod =
      arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
    if (aCallable(iteratorMethod))
      return anObject(call(iteratorMethod, argument));
    throw $TypeError$6(tryToString(argument) + ' is not iterable');
  };

  var iteratorClose$1 = function iteratorClose(iterator, kind, value) {
    var innerResult, innerError;
    anObject(iterator);
    try {
      innerResult = getMethod(iterator, 'return');
      if (!innerResult) {
        if (kind === 'throw') throw value;
        return value;
      }
      innerResult = call(innerResult, iterator);
    } catch (error) {
      innerError = true;
      innerResult = error;
    }
    if (kind === 'throw') throw value;
    if (innerError) throw innerResult;
    anObject(innerResult);
    return value;
  };

  var bind = functionBindContext;

  var isArrayIteratorMethod = isArrayIteratorMethod$1;

  var getIterator = getIterator$1;

  var iteratorClose = iteratorClose$1;

  var $TypeError$5 = TypeError;
  var Result = function Result(stopped, result) {
    this.stopped = stopped;
    this.result = result;
  };
  var ResultPrototype = Result.prototype;
  var iterate$1 = function iterate(iterable, unboundFunction, options) {
    var that = options && options.that;
    var AS_ENTRIES = !!(options && options.AS_ENTRIES);
    var IS_RECORD = !!(options && options.IS_RECORD);
    var IS_ITERATOR = !!(options && options.IS_ITERATOR);
    var INTERRUPTED = !!(options && options.INTERRUPTED);
    var fn = bind(unboundFunction, that);
    var iterator, iterFn, index, length, result, next, step;
    var stop = function stop(condition) {
      if (iterator) iteratorClose(iterator, 'normal', condition);
      return new Result(true, condition);
    };
    var callFn = function callFn(value) {
      if (AS_ENTRIES) {
        anObject(value);
        return INTERRUPTED
          ? fn(value[0], value[1], stop)
          : fn(value[0], value[1]);
      }
      return INTERRUPTED ? fn(value, stop) : fn(value);
    };
    if (IS_RECORD) {
      iterator = iterable.iterator;
    } else if (IS_ITERATOR) {
      iterator = iterable;
    } else {
      iterFn = getIteratorMethod(iterable);
      if (!iterFn)
        throw $TypeError$5(tryToString(iterable) + ' is not iterable');
      // optimisation for array iterators
      if (isArrayIteratorMethod(iterFn)) {
        for (
          index = 0, length = lengthOfArrayLike(iterable);
          length > index;
          index++
        ) {
          result = callFn(iterable[index]);
          if (result && isPrototypeOf(ResultPrototype, result)) return result;
        }
        return new Result(false);
      }
      iterator = getIterator(iterable, iterFn);
    }
    next = IS_RECORD ? iterable.next : iterator.next;
    while (!(step = call(next, iterator)).done) {
      try {
        result = callFn(step.value);
      } catch (error) {
        iteratorClose(iterator, 'throw', error);
      }
      if (
        _typeof(result) == 'object' &&
        result &&
        isPrototypeOf(ResultPrototype, result)
      )
        return result;
    }
    return new Result(false);
  };

  var $TypeError$4 = TypeError;
  var anInstance$1 = function anInstance(it, Prototype) {
    if (isPrototypeOf(Prototype, it)) return it;
    throw $TypeError$4('Incorrect invocation');
  };

  var TO_STRING_TAG_SUPPORT = toStringTagSupport;

  // `Object.prototype.toString` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  var objectToString = TO_STRING_TAG_SUPPORT
    ? {}.toString
    : function toString() {
        return '[object ' + classof$1(this) + ']';
      };

  var toString$3 = objectToString;

  var defineProperty$4 = definePropertyModule.f;
  var TO_STRING_TAG$2 = wellKnownSymbol$1('toStringTag');
  var setToStringTag$1 = function setToStringTag(it, TAG, STATIC, SET_METHOD) {
    if (it) {
      var target = STATIC ? it : it.prototype;
      if (!hasOwn(target, TO_STRING_TAG$2)) {
        defineProperty$4(target, TO_STRING_TAG$2, {
          configurable: true,
          value: TAG,
        });
      }
      if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
        createNonEnumerableProperty(target, 'toString', toString$3);
      }
    }
  };

  var push$1 = uncurryThis$1([].push);

  // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
  var createMethod$1 = function createMethod(TYPE) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var IS_FILTER_REJECT = TYPE == 7;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    return function ($this, callbackfn, that, specificCreate) {
      var O = toObject($this);
      var self = IndexedObject(O);
      var boundFunction = bind(callbackfn, that);
      var length = lengthOfArrayLike(self);
      var index = 0;
      var create = specificCreate || arraySpeciesCreate;
      var target = IS_MAP
        ? create($this, length)
        : IS_FILTER || IS_FILTER_REJECT
        ? create($this, 0)
        : undefined;
      var value, result;
      for (; length > index; index++) {
        if (NO_HOLES || index in self) {
          value = self[index];
          result = boundFunction(value, index, O);
          if (TYPE) {
            if (IS_MAP) target[index] = result; // map
            else if (result)
              switch (TYPE) {
                case 3:
                  return true;
                // some
                case 5:
                  return value;
                // find
                case 6:
                  return index;
                // findIndex
                case 2:
                  push$1(target, value);
                // filter
              }
            else
              switch (TYPE) {
                case 4:
                  return false;
                // every
                case 7:
                  push$1(target, value);
                // filterReject
              }
          }
        }
      }

      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
    };
  };
  var arrayIteration = {
    // `Array.prototype.forEach` method
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    forEach: createMethod$1(0),
    // `Array.prototype.map` method
    // https://tc39.es/ecma262/#sec-array.prototype.map
    map: createMethod$1(1),
    // `Array.prototype.filter` method
    // https://tc39.es/ecma262/#sec-array.prototype.filter
    filter: createMethod$1(2),
    // `Array.prototype.some` method
    // https://tc39.es/ecma262/#sec-array.prototype.some
    some: createMethod$1(3),
    // `Array.prototype.every` method
    // https://tc39.es/ecma262/#sec-array.prototype.every
    every: createMethod$1(4),
    // `Array.prototype.find` method
    // https://tc39.es/ecma262/#sec-array.prototype.find
    find: createMethod$1(5),
    // `Array.prototype.findIndex` method
    // https://tc39.es/ecma262/#sec-array.prototype.findIndex
    findIndex: createMethod$1(6),
    // `Array.prototype.filterReject` method
    // https://github.com/tc39/proposal-array-filtering
    filterReject: createMethod$1(7),
  };

  var iterate = iterate$1;

  var anInstance = anInstance$1;

  var setToStringTag = setToStringTag$1;

  var require$$0$g = arrayIteration;

  var InternalStateModule = internalState;

  var defineProperty$3 = definePropertyModule.f;
  var forEach = require$$0$g.forEach;
  var setInternalState$4 = InternalStateModule.set;
  var internalStateGetterFor$1 = InternalStateModule.getterFor;
  var collection$1 = function collection(CONSTRUCTOR_NAME, wrapper, common) {
    var IS_MAP =
      indexOf$1(CONSTRUCTOR_NAME).call(CONSTRUCTOR_NAME, 'Map') !== -1;
    var IS_WEAK =
      indexOf$1(CONSTRUCTOR_NAME).call(CONSTRUCTOR_NAME, 'Weak') !== -1;
    var ADDER = IS_MAP ? 'set' : 'add';
    var NativeConstructor = global$2[CONSTRUCTOR_NAME];
    var NativePrototype = NativeConstructor && NativeConstructor.prototype;
    var exported = {};
    var Constructor;
    if (
      !DESCRIPTORS ||
      !isCallable(NativeConstructor) ||
      !(
        IS_WEAK ||
        (NativePrototype.forEach &&
          !fails(function () {
            var _context;
            entries((_context = new NativeConstructor()))
              .call(_context)
              .next();
          }))
      )
    ) {
      // create collection constructor
      Constructor = common.getConstructor(
        wrapper,
        CONSTRUCTOR_NAME,
        IS_MAP,
        ADDER
      );
      InternalMetadataModule.enable();
    } else {
      Constructor = wrapper(function (target, iterable) {
        setInternalState$4(anInstance(target, Prototype), {
          type: CONSTRUCTOR_NAME,
          collection: new NativeConstructor(),
        });
        if (iterable != undefined)
          iterate(iterable, target[ADDER], {
            that: target,
            AS_ENTRIES: IS_MAP,
          });
      });
      var Prototype = Constructor.prototype;
      var getInternalState = internalStateGetterFor$1(CONSTRUCTOR_NAME);
      forEach(
        [
          'add',
          'clear',
          'delete',
          'forEach',
          'get',
          'has',
          'set',
          'keys',
          'values',
          'entries',
        ],
        function (KEY) {
          var IS_ADDER = KEY == 'add' || KEY == 'set';
          if (KEY in NativePrototype && !(IS_WEAK && KEY == 'clear')) {
            createNonEnumerableProperty(Prototype, KEY, function (a, b) {
              var collection = getInternalState(this).collection;
              if (!IS_ADDER && IS_WEAK && !isObject(a))
                return KEY == 'get' ? undefined : false;
              var result = collection[KEY](a === 0 ? 0 : a, b);
              return IS_ADDER ? this : result;
            });
          }
        }
      );
      IS_WEAK ||
        defineProperty$3(Prototype, 'size', {
          configurable: true,
          get: function get() {
            return getInternalState(this).collection.size;
          },
        });
    }
    setToStringTag(Constructor, CONSTRUCTOR_NAME, false, true);
    exported[CONSTRUCTOR_NAME] = Constructor;
    $(
      {
        global: true,
        forced: true,
      },
      exported
    );
    if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
    return Constructor;
  };

  var addToUnscopables = addToUnscopables$1;

  var _context$3;
  var $find = find$1(require$$0$g);
  var FIND = 'find';
  var SKIPS_HOLES$1 = true;

  // Shouldn't skip holes
  if (FIND in [])
    find$1((_context$3 = Array(1))).call(_context$3, function () {
      SKIPS_HOLES$1 = false;
    });

  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  $(
    {
      target: 'Array',
      proto: true,
      forced: SKIPS_HOLES$1,
    },
    {
      find: function find(callbackfn /* , that = undefined */) {
        return $find(
          this,
          callbackfn,
          arguments.length > 1 ? arguments[1] : undefined
        );
      },
    }
  );

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables();

  var find$4 = find$1(entryVirtual('Array'));

  var method$3 = find$4;

  var ArrayPrototype$4 = Array.prototype;
  var find$3 = function find(it) {
    var own = find$1(it);
    return it === ArrayPrototype$4 ||
      (isPrototypeOf(ArrayPrototype$4, it) && own === find$1(ArrayPrototype$4))
      ? method$3
      : own;
  };

  var parent$e = find$3;

  var find$2 = parent$e;

  var require$$0$f = find$2;

  var find$1 = require$$0$f;

  var _context$2;
  var $findIndex = findIndex$1(require$$0$g);
  var FIND_INDEX = 'findIndex';
  var SKIPS_HOLES = true;

  // Shouldn't skip holes
  if (FIND_INDEX in [])
    findIndex$1((_context$2 = Array(1))).call(_context$2, function () {
      SKIPS_HOLES = false;
    });

  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findindex
  $(
    {
      target: 'Array',
      proto: true,
      forced: SKIPS_HOLES,
    },
    {
      findIndex: function findIndex(callbackfn /* , that = undefined */) {
        return $findIndex(
          this,
          callbackfn,
          arguments.length > 1 ? arguments[1] : undefined
        );
      },
    }
  );

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables();

  var findIndex$4 = findIndex$1(entryVirtual('Array'));

  var method$2 = findIndex$4;

  var ArrayPrototype$3 = Array.prototype;
  var findIndex$3 = function findIndex(it) {
    var own = findIndex$1(it);
    return it === ArrayPrototype$3 ||
      (isPrototypeOf(ArrayPrototype$3, it) &&
        own === findIndex$1(ArrayPrototype$3))
      ? method$2
      : own;
  };

  var parent$d = findIndex$3;

  var findIndex$2 = parent$d;

  var require$$0$e = findIndex$2;

  var findIndex$1 = require$$0$e;

  var defineBuiltIns = defineBuiltIns$1;

  var getWeakData = InternalMetadataModule.getWeakData;
  var setInternalState$3 = InternalStateModule.set;
  var internalStateGetterFor = InternalStateModule.getterFor;
  var find = find$1(require$$0$g);
  var findIndex = findIndex$1(require$$0$g);
  var splice = uncurryThis$1(splice$1([]));
  var id = 0;

  // fallback for uncaught frozen keys
  var uncaughtFrozenStore = function uncaughtFrozenStore(store) {
    return store.frozen || (store.frozen = new UncaughtFrozenStore());
  };
  var UncaughtFrozenStore = function UncaughtFrozenStore() {
    this.entries = [];
  };
  var findUncaughtFrozen = function findUncaughtFrozen(store, key) {
    return find(entries(store), function (it) {
      return it[0] === key;
    });
  };
  UncaughtFrozenStore.prototype = {
    get: function get(key) {
      var entry = findUncaughtFrozen(this, key);
      if (entry) return entry[1];
    },
    has: function has(key) {
      return !!findUncaughtFrozen(this, key);
    },
    set: function set(key, value) {
      var entry = findUncaughtFrozen(this, key);
      if (entry) entry[1] = value;
      else entries(this).push([key, value]);
    },
    delete: function _delete(key) {
      var index = findIndex(entries(this), function (it) {
        return it[0] === key;
      });
      if (~index) splice(entries(this), index, 1);
      return !!~index;
    },
  };
  var collectionWeak$1 = {
    getConstructor: function getConstructor(
      wrapper,
      CONSTRUCTOR_NAME,
      IS_MAP,
      ADDER
    ) {
      var Constructor = wrapper(function (that, iterable) {
        anInstance(that, Prototype);
        setInternalState$3(that, {
          type: CONSTRUCTOR_NAME,
          id: id++,
          frozen: undefined,
        });
        if (!isNullOrUndefined(iterable))
          iterate(iterable, that[ADDER], {
            that: that,
            AS_ENTRIES: IS_MAP,
          });
      });
      var Prototype = Constructor.prototype;
      var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);
      var define = function define(that, key, value) {
        var state = getInternalState(that);
        var data = getWeakData(anObject(key), true);
        if (data === true) uncaughtFrozenStore(state).set(key, value);
        else data[state.id] = value;
        return that;
      };
      defineBuiltIns(Prototype, {
        // `{ WeakMap, WeakSet }.prototype.delete(key)` methods
        // https://tc39.es/ecma262/#sec-weakmap.prototype.delete
        // https://tc39.es/ecma262/#sec-weakset.prototype.delete
        delete: function _delete(key) {
          var state = getInternalState(this);
          if (!isObject(key)) return false;
          var data = getWeakData(key);
          if (data === true) return uncaughtFrozenStore(state)['delete'](key);
          return data && hasOwn(data, state.id) && delete data[state.id];
        },
        // `{ WeakMap, WeakSet }.prototype.has(key)` methods
        // https://tc39.es/ecma262/#sec-weakmap.prototype.has
        // https://tc39.es/ecma262/#sec-weakset.prototype.has
        has: function has(key) {
          var state = getInternalState(this);
          if (!isObject(key)) return false;
          var data = getWeakData(key);
          if (data === true) return uncaughtFrozenStore(state).has(key);
          return data && hasOwn(data, state.id);
        },
      });
      defineBuiltIns(
        Prototype,
        IS_MAP
          ? {
              // `WeakMap.prototype.get(key)` method
              // https://tc39.es/ecma262/#sec-weakmap.prototype.get
              get: function get(key) {
                var state = getInternalState(this);
                if (isObject(key)) {
                  var data = getWeakData(key);
                  if (data === true) return uncaughtFrozenStore(state).get(key);
                  return data ? data[state.id] : undefined;
                }
              },
              // `WeakMap.prototype.set(key, value)` method
              // https://tc39.es/ecma262/#sec-weakmap.prototype.set
              set: function set(key, value) {
                return define(this, key, value);
              },
            }
          : {
              // `WeakSet.prototype.add(value)` method
              // https://tc39.es/ecma262/#sec-weakset.prototype.add
              add: function add(value) {
                return define(this, value, true);
              },
            }
      );
      return Constructor;
    },
  };

  var WeakMap$1 = weakMap;
  var weakMapBasicDetection =
    isCallable(WeakMap$1) && /native code/.test(String(WeakMap$1));

  var collection = collection$1;

  var collectionWeak = collectionWeak$1;

  var NATIVE_WEAK_MAP = weakMapBasicDetection;

  var enforceInternalState = InternalStateModule.enforce;
  var IS_IE11 = !global$2.ActiveXObject && 'ActiveXObject' in global$2;
  var InternalWeakMap;
  var wrapper = function wrapper(init) {
    return function WeakMap() {
      return init(this, arguments.length ? arguments[0] : undefined);
    };
  };

  // `WeakMap` constructor
  // https://tc39.es/ecma262/#sec-weakmap-constructor
  var $WeakMap = collection('WeakMap', wrapper, collectionWeak);

  // IE11 WeakMap frozen keys fix
  // We can't use feature detection because it crash some old IE builds
  // https://github.com/zloirock/core-js/issues/485
  if (NATIVE_WEAK_MAP && IS_IE11) {
    InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true);
    InternalMetadataModule.enable();
    var WeakMapPrototype = $WeakMap.prototype;
    var nativeDelete = uncurryThis$1(WeakMapPrototype['delete']);
    var nativeHas = uncurryThis$1(WeakMapPrototype.has);
    var nativeGet = uncurryThis$1(WeakMapPrototype.get);
    var nativeSet = uncurryThis$1(WeakMapPrototype.set);
    defineBuiltIns(WeakMapPrototype, {
      delete: function _delete(key) {
        if (isObject(key) && !isExtensible$3(key)) {
          var state = enforceInternalState(this);
          if (!state.frozen) state.frozen = new InternalWeakMap();
          return nativeDelete(this, key) || state.frozen['delete'](key);
        }
        return nativeDelete(this, key);
      },
      has: function has(key) {
        if (isObject(key) && !isExtensible$3(key)) {
          var state = enforceInternalState(this);
          if (!state.frozen) state.frozen = new InternalWeakMap();
          return nativeHas(this, key) || state.frozen.has(key);
        }
        return nativeHas(this, key);
      },
      get: function get(key) {
        if (isObject(key) && !isExtensible$3(key)) {
          var state = enforceInternalState(this);
          if (!state.frozen) state.frozen = new InternalWeakMap();
          return nativeHas(this, key)
            ? nativeGet(this, key)
            : state.frozen.get(key);
        }
        return nativeGet(this, key);
      },
      set: function set(key, value) {
        if (isObject(key) && !isExtensible$3(key)) {
          var state = enforceInternalState(this);
          if (!state.frozen) state.frozen = new InternalWeakMap();
          nativeHas(this, key)
            ? nativeSet(this, key, value)
            : state.frozen.set(key, value);
        } else nativeSet(this, key, value);
        return this;
      },
    });
  }

  var weakMap$2 = path.WeakMap;

  var parent$c = weakMap$2;

  var weakMap$1 = parent$c;

  var require$$0$d = weakMap$1;

  var weakMap = require$$0$d;

  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$2 = defineProperty$5;
  var defineGlobalProperty$1 = function defineGlobalProperty(key, value) {
    try {
      defineProperty$2(global$2, key, {
        value: value,
        configurable: true,
        writable: true,
      });
    } catch (error) {
      global$2[key] = value;
    }
    return value;
  };

  var defineGlobalProperty = defineGlobalProperty$1;

  var SHARED = '__core-js_shared__';
  var store$2 = global$2[SHARED] || defineGlobalProperty(SHARED, {});
  var sharedStore = store$2;

  var isPure = true;

  var IS_PURE = isPure;

  var store$1 = sharedStore;

  var shared$1 = createCommonjsModule(function (module) {
    (module.exports = function (key, value) {
      return store$1[key] || (store$1[key] = value !== undefined ? value : {});
    })('versions', []).push({
      version: '3.26.1',
      mode: IS_PURE ? 'pure' : 'global',
      copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
      license: 'https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE',
      source: 'https://github.com/zloirock/core-js',
    });
  });

  var shared = shared$1;

  var keys$7 = shared('keys');
  var sharedKey$1 = function sharedKey(key) {
    return keys$7[key] || (keys$7[key] = uid(key));
  };

  var sharedKey = sharedKey$1;

  var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
  var TypeError$2 = global$2.TypeError;
  var WeakMap = weakMap;
  var set, get, has;
  var enforce = function enforce(it) {
    return has(it) ? get(it) : set(it, {});
  };
  var getterFor = function getterFor(TYPE) {
    return function (it) {
      var state;
      if (!isObject(it) || (state = get(it)).type !== TYPE) {
        throw TypeError$2('Incompatible receiver, ' + TYPE + ' required');
      }
      return state;
    };
  };
  if (NATIVE_WEAK_MAP || store$1.state) {
    var store = store$1.state || (store$1.state = new WeakMap());
    /* eslint-disable no-self-assign -- prototype methods protection */
    store.get = store.get;
    store.has = store.has;
    store.set = store.set;
    /* eslint-enable no-self-assign -- prototype methods protection */
    set = function set(it, metadata) {
      if (store.has(it)) throw TypeError$2(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      store.set(it, metadata);
      return metadata;
    };
    get = function get(it) {
      return store.get(it) || {};
    };
    has = function has(it) {
      return store.has(it);
    };
  } else {
    var STATE = sharedKey('state');
    hiddenKeys$1[STATE] = true;
    set = function set(it, metadata) {
      if (hasOwn(it, STATE)) throw TypeError$2(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty(it, STATE, metadata);
      return metadata;
    };
    get = function get(it) {
      return hasOwn(it, STATE) ? it[STATE] : {};
    };
    has = function has(it) {
      return hasOwn(it, STATE);
    };
  }
  var internalState = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor,
  };

  var FunctionPrototype = Function.prototype;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getDescriptor = DESCRIPTORS && getOwnPropertyDescriptor$2;
  var EXISTS = hasOwn(FunctionPrototype, 'name');
  // additional protection from minified / mangled / dropped function names
  var PROPER =
    EXISTS &&
    function something() {
      /* empty */
    }.name === 'something';
  var CONFIGURABLE =
    EXISTS &&
    (!DESCRIPTORS ||
      (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));
  var functionName = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE,
  };

  var keys$6 = keys$3(entryVirtual('Array'));

  var parent$b = keys$6;

  var keys$5 = parent$b;

  var method$1 = keys$5;

  var ArrayPrototype$2 = Array.prototype;
  var DOMIterables = {
    DOMTokenList: true,
    NodeList: true,
  };
  var keys$4 = function keys(it) {
    var own = keys$3(it);
    return it === ArrayPrototype$2 ||
      (isPrototypeOf(ArrayPrototype$2, it) &&
        own === keys$3(ArrayPrototype$2)) ||
      hasOwn(DOMIterables, classof$1(it))
      ? method$1
      : own;
  };

  var require$$0$c = keys$4;

  var keys$3 = require$$0$c;

  var definePropertiesModule = objectDefineProperties;

  var defineProperties$2 = definePropertiesModule.f;

  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  // eslint-disable-next-line es/no-object-defineproperties -- safe
  $(
    {
      target: 'Object',
      stat: true,
      forced: defineProperties !== defineProperties$2,
      sham: !DESCRIPTORS,
    },
    {
      defineProperties: defineProperties$2,
    }
  );

  var defineProperties_1 = createCommonjsModule(function (module) {
    var Object = path.Object;
    var defineProperties = (module.exports = function defineProperties(T, D) {
      return Object.defineProperties(T, D);
    });
    if (Object.defineProperties.sham) defineProperties.sham = true;
  });

  var parent$a = defineProperties_1;

  var defineProperties$1 = parent$a;

  var require$$0$b = defineProperties$1;

  var defineProperties = require$$0$b;

  var objectKeys$1 = objectKeys;

  var FAILS_ON_PRIMITIVES$1 = fails(function () {
    objectKeys$1(1);
  });

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  $(
    {
      target: 'Object',
      stat: true,
      forced: FAILS_ON_PRIMITIVES$1,
    },
    {
      keys: function keys(it) {
        return objectKeys$1(toObject(it));
      },
    }
  );

  var keys$2 = keys$3(path.Object);

  var parent$9 = keys$2;

  var keys$1 = parent$9;

  var require$$0$a = keys$1;

  var keys = require$$0$a;

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  // eslint-disable-next-line es/no-object-keys -- safe
  var objectKeys =
    keys ||
    function keys(O) {
      return internalObjectKeys(O, enumBugKeys);
    };

  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  // eslint-disable-next-line es/no-object-defineproperties -- safe
  var f$2 =
    DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG
      ? defineProperties
      : function defineProperties(O, Properties) {
          anObject(O);
          var props = toIndexedObject(Properties);
          var keys = objectKeys$1(Properties);
          var length = keys.length;
          var index = 0;
          var key;
          while (length > index) {
            definePropertyModule.f(O, (key = keys[index++]), props[key]);
          }
          return O;
        };
  var objectDefineProperties = {
    f: f$2,
  };

  var html$1 = getBuiltIn('document', 'documentElement');

  var html = html$1;

  /* global ActiveXObject -- old IE, WSH */
  var GT = '>';
  var LT = '<';
  var PROTOTYPE$1 = 'prototype';
  var SCRIPT = 'script';
  var IE_PROTO$1 = sharedKey('IE_PROTO');
  var EmptyConstructor = function EmptyConstructor() {
    /* empty */
  };
  var scriptTag = function scriptTag(content) {
    return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
  };

  // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
  var NullProtoObjectViaActiveX = function NullProtoObjectViaActiveX(
    activeXDocument
  ) {
    activeXDocument.write(scriptTag(''));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    activeXDocument = null; // avoid memory leak
    return temp;
  };

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var NullProtoObjectViaIFrame = function NullProtoObjectViaIFrame() {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement('iframe');
    var JS = 'java' + SCRIPT + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    html.appendChild(iframe);
    // https://github.com/zloirock/core-js/issues/475
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag('document.F=Object'));
    iframeDocument.close();
    return iframeDocument.F;
  };

  // Check for document.domain and active x support
  // No need to use active x approach when document.domain is not set
  // see https://github.com/es-shims/es5-shim/issues/150
  // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
  // avoid IE GC bug
  var activeXDocument;
  var _NullProtoObject = function NullProtoObject() {
    try {
      activeXDocument = new ActiveXObject('htmlfile');
    } catch (error) {
      /* ignore */
    }
    _NullProtoObject =
      typeof document != 'undefined'
        ? document.domain && activeXDocument
          ? NullProtoObjectViaActiveX(activeXDocument) // old IE
          : NullProtoObjectViaIFrame()
        : NullProtoObjectViaActiveX(activeXDocument); // WSH
    var length = enumBugKeys.length;
    while (length--) {
      delete _NullProtoObject[PROTOTYPE$1][enumBugKeys[length]];
    }
    return _NullProtoObject();
  };
  hiddenKeys$1[IE_PROTO$1] = true;

  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  // eslint-disable-next-line es/no-object-create -- safe
  var objectCreate =
    Object.create ||
    function create(O, Properties) {
      var result;
      if (O !== null) {
        EmptyConstructor[PROTOTYPE$1] = anObject(O);
        result = new EmptyConstructor();
        EmptyConstructor[PROTOTYPE$1] = null;
        // add "__proto__" for Object.getPrototypeOf polyfill
        result[IE_PROTO$1] = O;
      } else result = _NullProtoObject();
      return Properties === undefined
        ? result
        : definePropertiesModule.f(result, Properties);
    };

  var correctPrototypeGetter = !fails(function () {
    function F() {
      /* empty */
    }
    F.prototype.constructor = null;
    // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
    return getPrototypeOf(new F()) !== F.prototype;
  });

  var getPrototypeOf$3 = objectGetPrototypeOf;

  var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

  var FAILS_ON_PRIMITIVES = fails(function () {
    getPrototypeOf$3(1);
  });

  // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof
  $(
    {
      target: 'Object',
      stat: true,
      forced: FAILS_ON_PRIMITIVES,
      sham: !CORRECT_PROTOTYPE_GETTER,
    },
    {
      getPrototypeOf: function getPrototypeOf(it) {
        return getPrototypeOf$3(toObject(it));
      },
    }
  );

  var getPrototypeOf$2 = path.Object.getPrototypeOf;

  var parent$8 = getPrototypeOf$2;

  var getPrototypeOf$1 = parent$8;

  var require$$0$9 = getPrototypeOf$1;

  var getPrototypeOf = require$$0$9;

  var IE_PROTO = sharedKey('IE_PROTO');
  var $Object$2 = Object;
  var ObjectPrototype$1 = $Object$2.prototype;

  // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof
  // eslint-disable-next-line es/no-object-getprototypeof -- safe
  var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER
    ? getPrototypeOf
    : function (O) {
        var object = toObject(O);
        if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
        var constructor = object.constructor;
        if (isCallable(constructor) && object instanceof constructor) {
          return constructor.prototype;
        }
        return object instanceof $Object$2 ? ObjectPrototype$1 : null;
      };

  var nativeObjectCreate = objectCreate;

  var ITERATOR$1 = wellKnownSymbol$1('iterator');
  var BUGGY_SAFARI_ITERATORS$1 = false;

  // `%IteratorPrototype%` object
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-object
  var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;

  /* eslint-disable es/no-array-prototype-keys -- safe */
  if (keys$3([])) {
    var _context$1;
    arrayIterator = keys$3((_context$1 = [])).call(_context$1);
    // Safari 8 has buggy iterators w/o `next`
    if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
    else {
      PrototypeOfArrayIteratorPrototype = getPrototypeOf$3(
        getPrototypeOf$3(arrayIterator)
      );
      if (PrototypeOfArrayIteratorPrototype !== Object.prototype)
        IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
    }
  }
  var NEW_ITERATOR_PROTOTYPE =
    !isObject(IteratorPrototype$2) ||
    fails(function () {
      var test = {};
      // FF44- legacy iterators case
      return IteratorPrototype$2[ITERATOR$1].call(test) !== test;
    });
  if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};
  else if (IS_PURE)
    IteratorPrototype$2 = nativeObjectCreate(IteratorPrototype$2);

  // `%IteratorPrototype%[@@iterator]()` method
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
  if (!isCallable(IteratorPrototype$2[ITERATOR$1])) {
    defineBuiltIn(IteratorPrototype$2, ITERATOR$1, function () {
      return this;
    });
  }
  var iteratorsCore = {
    IteratorPrototype: IteratorPrototype$2,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1,
  };

  var IteratorsCore = iteratorsCore;

  var IteratorPrototype$1 = IteratorsCore.IteratorPrototype;
  var returnThis$1 = function returnThis() {
    return this;
  };
  var iteratorCreateConstructor = function iteratorCreateConstructor(
    IteratorConstructor,
    NAME,
    next,
    ENUMERABLE_NEXT
  ) {
    var TO_STRING_TAG = NAME + ' Iterator';
    IteratorConstructor.prototype = nativeObjectCreate(IteratorPrototype$1, {
      next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next),
    });
    setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
    Iterators[TO_STRING_TAG] = returnThis$1;
    return IteratorConstructor;
  };

  var setPrototypeOf$3 = objectSetPrototypeOf;

  // `Object.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.setprototypeof
  $(
    {
      target: 'Object',
      stat: true,
    },
    {
      setPrototypeOf: setPrototypeOf$3,
    }
  );

  var setPrototypeOf$2 = path.Object.setPrototypeOf;

  var parent$7 = setPrototypeOf$2;

  var setPrototypeOf$1 = parent$7;

  var require$$0$8 = setPrototypeOf$1;

  var setPrototypeOf = require$$0$8;

  var $String$1 = String;
  var $TypeError$3 = TypeError;
  var aPossiblePrototype$1 = function aPossiblePrototype(argument) {
    if (_typeof(argument) == 'object' || isCallable(argument)) return argument;
    throw $TypeError$3("Can't set " + $String$1(argument) + ' as a prototype');
  };

  var aPossiblePrototype = aPossiblePrototype$1;

  // `Object.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.setprototypeof
  // Works with __proto__ only. Old v8 can't work with null proto objects.
  // eslint-disable-next-line es/no-object-setprototypeof -- safe
  var objectSetPrototypeOf =
    setPrototypeOf ||
    ('__proto__' in {}
      ? (function () {
          var CORRECT_SETTER = false;
          var test = {};
          var setter;
          try {
            // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
            setter = uncurryThis$1(
              getOwnPropertyDescriptor$2(Object.prototype, '__proto__').set
            );
            setter(test, []);
            CORRECT_SETTER = test instanceof Array;
          } catch (error) {
            /* empty */
          }
          return function setPrototypeOf(O, proto) {
            anObject(O);
            aPossiblePrototype(proto);
            if (CORRECT_SETTER) setter(O, proto);
            else O.__proto__ = proto;
            return O;
          };
        })()
      : undefined);

  var FunctionName = functionName;

  var createIteratorConstructor = iteratorCreateConstructor;

  var PROPER_FUNCTION_NAME = FunctionName.PROPER;
  var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
  var IteratorPrototype = IteratorsCore.IteratorPrototype;
  var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
  var ITERATOR = wellKnownSymbol$1('iterator');
  var KEYS = 'keys';
  var VALUES = 'values';
  var ENTRIES = 'entries';
  var returnThis = function returnThis() {
    return this;
  };
  var iteratorDefine = function iteratorDefine(
    Iterable,
    NAME,
    IteratorConstructor,
    next,
    DEFAULT,
    IS_SET,
    FORCED
  ) {
    createIteratorConstructor(IteratorConstructor, NAME, next);
    var getIterationMethod = function getIterationMethod(KIND) {
      if (KIND === DEFAULT && defaultIterator) return defaultIterator;
      if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype)
        return IterablePrototype[KIND];
      switch (KIND) {
        case KEYS:
          return function keys() {
            return new IteratorConstructor(this, KIND);
          };
        case VALUES:
          return function values() {
            return new IteratorConstructor(this, KIND);
          };
        case ENTRIES:
          return function entries() {
            return new IteratorConstructor(this, KIND);
          };
      }
      return function () {
        return new IteratorConstructor(this);
      };
    };
    var TO_STRING_TAG = NAME + ' Iterator';
    var INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    var nativeIterator =
      IterablePrototype[ITERATOR] ||
      IterablePrototype['@@iterator'] ||
      (DEFAULT && IterablePrototype[DEFAULT]);
    var defaultIterator =
      (!BUGGY_SAFARI_ITERATORS && nativeIterator) ||
      getIterationMethod(DEFAULT);
    var anyNativeIterator =
      NAME == 'Array'
        ? entries(IterablePrototype) || nativeIterator
        : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY;

    // fix native
    if (anyNativeIterator) {
      CurrentIteratorPrototype = getPrototypeOf$3(
        anyNativeIterator.call(new Iterable())
      );
      if (
        CurrentIteratorPrototype !== Object.prototype &&
        CurrentIteratorPrototype.next
      ) {
        if (
          !IS_PURE &&
          getPrototypeOf$3(CurrentIteratorPrototype) !== IteratorPrototype
        ) {
          if (setPrototypeOf$3) {
            setPrototypeOf$3(CurrentIteratorPrototype, IteratorPrototype);
          } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
            defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
          }
        }
        // Set @@toStringTag to native iterators
        setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
        if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
      }
    }

    // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
    if (
      PROPER_FUNCTION_NAME &&
      DEFAULT == VALUES &&
      nativeIterator &&
      nativeIterator.name !== VALUES
    ) {
      if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
        createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
      } else {
        INCORRECT_VALUES_NAME = true;
        defaultIterator = function values() {
          return call(nativeIterator, this);
        };
      }
    }

    // export additional methods
    if (DEFAULT) {
      methods = {
        values: getIterationMethod(VALUES),
        keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
        entries: getIterationMethod(ENTRIES),
      };
      if (FORCED)
        for (KEY in methods) {
          if (
            BUGGY_SAFARI_ITERATORS ||
            INCORRECT_VALUES_NAME ||
            !(KEY in IterablePrototype)
          ) {
            defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
          }
        }
      else
        $(
          {
            target: NAME,
            proto: true,
            forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME,
          },
          methods
        );
    }

    // define iterator
    if (
      (!IS_PURE || FORCED) &&
      IterablePrototype[ITERATOR] !== defaultIterator
    ) {
      defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, {
        name: DEFAULT,
      });
    }
    Iterators[NAME] = defaultIterator;
    return methods;
  };

  // `CreateIterResultObject` abstract operation
  // https://tc39.es/ecma262/#sec-createiterresultobject
  var createIterResultObject$1 = function createIterResultObject(value, done) {
    return {
      value: value,
      done: done,
    };
  };

  var defineIterator = iteratorDefine;

  var createIterResultObject = createIterResultObject$1;

  var defineProperty$1 = definePropertyModule.f;
  var ARRAY_ITERATOR = 'Array Iterator';
  var setInternalState$2 = InternalStateModule.set;
  var getInternalState$2 = InternalStateModule.getterFor(ARRAY_ITERATOR);

  // `Array.prototype.entries` method
  // https://tc39.es/ecma262/#sec-array.prototype.entries
  // `Array.prototype.keys` method
  // https://tc39.es/ecma262/#sec-array.prototype.keys
  // `Array.prototype.values` method
  // https://tc39.es/ecma262/#sec-array.prototype.values
  // `Array.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-array.prototype-@@iterator
  // `CreateArrayIterator` internal method
  // https://tc39.es/ecma262/#sec-createarrayiterator
  defineIterator(
    Array,
    'Array',
    function (iterated, kind) {
      setInternalState$2(this, {
        type: ARRAY_ITERATOR,
        target: toIndexedObject(iterated),
        // target
        index: 0,
        // next index
        kind: kind, // kind
      });
      // `%ArrayIteratorPrototype%.next` method
      // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
    },
    function () {
      var state = getInternalState$2(this);
      var target = state.target;
      var kind = state.kind;
      var index = state.index++;
      if (!target || index >= target.length) {
        state.target = undefined;
        return createIterResultObject(undefined, true);
      }
      if (kind == 'keys') return createIterResultObject(index, false);
      if (kind == 'values') return createIterResultObject(target[index], false);
      return createIterResultObject([index, target[index]], false);
    },
    'values'
  );

  // argumentsList[@@iterator] is %ArrayProto_values%
  // https://tc39.es/ecma262/#sec-createunmappedargumentsobject
  // https://tc39.es/ecma262/#sec-createmappedargumentsobject
  var values = (Iterators.Arguments = Iterators.Array);

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables();
  addToUnscopables();
  addToUnscopables();

  // V8 ~ Chrome 45- bug
  if (!IS_PURE && DESCRIPTORS && values.name !== 'values')
    try {
      defineProperty$1(values, 'name', {
        value: 'values',
      });
    } catch (error) {
      /* empty */
    }

  var $String = String;
  var toString$2 = function toString(argument) {
    if (classof$1(argument) === 'Symbol')
      throw TypeError('Cannot convert a Symbol value to a string');
    return $String(argument);
  };

  var toString$1 = toString$2;

  var charAt$2 = uncurryThis$1(''.charAt);
  var charCodeAt$1 = uncurryThis$1(''.charCodeAt);
  var stringSlice$1 = uncurryThis$1(slice(''));
  var createMethod = function createMethod(CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = toString$1(requireObjectCoercible($this));
      var position = toIntegerOrInfinity(pos);
      var size = S.length;
      var first, second;
      if (position < 0 || position >= size)
        return CONVERT_TO_STRING ? '' : undefined;
      first = charCodeAt$1(S, position);
      return first < 0xd800 ||
        first > 0xdbff ||
        position + 1 === size ||
        (second = charCodeAt$1(S, position + 1)) < 0xdc00 ||
        second > 0xdfff
        ? CONVERT_TO_STRING
          ? charAt$2(S, position)
          : first
        : CONVERT_TO_STRING
        ? stringSlice$1(S, position, position + 2)
        : ((first - 0xd800) << 10) + (second - 0xdc00) + 0x10000;
    };
  };
  var stringMultibyte = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod(true),
  };

  var require$$0$7 = stringMultibyte;

  var charAt$1 = require$$0$7.charAt;
  var STRING_ITERATOR = 'String Iterator';
  var setInternalState$1 = InternalStateModule.set;
  var getInternalState$1 = InternalStateModule.getterFor(STRING_ITERATOR);

  // `String.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-string.prototype-@@iterator
  defineIterator(
    String,
    'String',
    function (iterated) {
      setInternalState$1(this, {
        type: STRING_ITERATOR,
        string: toString$1(iterated),
        index: 0,
      });
      // `%StringIteratorPrototype%.next` method
      // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
    },
    function next() {
      var state = getInternalState$1(this);
      var string = state.string;
      var index = state.index;
      var point;
      if (index >= string.length)
        return createIterResultObject(undefined, true);
      point = charAt$1(string, index);
      state.index += point.length;
      return createIterResultObject(point, false);
    }
  );

  var f$1 = wellKnownSymbol$1;
  var wellKnownSymbolWrapped = {
    f: f$1,
  };

  var wrappedWellKnownSymbolModule = wellKnownSymbolWrapped;

  var defineProperty = definePropertyModule.f;
  var wellKnownSymbolDefine = function wellKnownSymbolDefine(NAME) {
    var _Symbol = path.Symbol || (path.Symbol = {});
    if (!hasOwn(_Symbol, NAME))
      defineProperty(_Symbol, NAME, {
        value: wrappedWellKnownSymbolModule.f(NAME),
      });
  };

  var defineWellKnownSymbol = wellKnownSymbolDefine;

  // `Symbol.iterator` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.iterator
  defineWellKnownSymbol('iterator');

  var iterator$2 = wrappedWellKnownSymbolModule.f('iterator');

  var parent$6 = iterator$2;

  var iterator$1 = parent$6;

  var require$$0$6 = iterator$1;

  var iterator = require$$0$6;

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
  var f = getOwnPropertySymbols;
  var objectGetOwnPropertySymbols = {
    f: f,
  };

  var symbolDefineToPrimitive = function symbolDefineToPrimitive() {
    var _Symbol = getBuiltIn('Symbol');
    var SymbolPrototype = _Symbol && _Symbol.prototype;
    var valueOf = SymbolPrototype && SymbolPrototype.valueOf;
    var TO_PRIMITIVE = wellKnownSymbol$1('toPrimitive');
    if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {
      // `Symbol.prototype[@@toPrimitive]` method
      // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
      // eslint-disable-next-line no-unused-vars -- required for .length
      defineBuiltIn(
        SymbolPrototype,
        TO_PRIMITIVE,
        function (hint) {
          return call(valueOf, this);
        },
        {
          arity: 1,
        }
      );
    }
  };

  var NATIVE_SYMBOL = symbolConstructorDetection;

  var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;

  var defineSymbolToPrimitive = symbolDefineToPrimitive;

  var $forEach = require$$0$g.forEach;
  var HIDDEN = sharedKey('hidden');
  var SYMBOL = 'Symbol';
  var PROTOTYPE = 'prototype';
  var setInternalState = InternalStateModule.set;
  var getInternalState = InternalStateModule.getterFor(SYMBOL);
  var ObjectPrototype = Object[PROTOTYPE];
  var $Symbol = symbol;
  var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
  var TypeError$1 = global$2.TypeError;
  var QObject = global$2.QObject;
  var nativeGetOwnPropertyDescriptor = require$$0$q.f;
  var nativeDefineProperty = definePropertyModule.f;
  var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
  var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
  var push = uncurryThis$1([].push);
  var AllSymbols = shared('symbols');
  var ObjectPrototypeSymbols = shared('op-symbols');
  var WellKnownSymbolsStore$1 = shared('wks');

  // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
  var USE_SETTER =
    !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

  // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
  var setSymbolDescriptor =
    DESCRIPTORS &&
    fails(function () {
      return (
        nativeObjectCreate(
          nativeDefineProperty({}, 'a', {
            get: function get() {
              return nativeDefineProperty(this, 'a', {
                value: 7,
              }).a;
            },
          })
        ).a != 7
      );
    })
      ? function (O, P, Attributes) {
          var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(
            ObjectPrototype,
            P
          );
          if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
          nativeDefineProperty(O, P, Attributes);
          if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
            nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
          }
        }
      : nativeDefineProperty;
  var wrap = function wrap(tag, description) {
    var symbol = (AllSymbols[tag] = nativeObjectCreate(SymbolPrototype));
    setInternalState(symbol, {
      type: SYMBOL,
      tag: tag,
      description: description,
    });
    if (!DESCRIPTORS) symbol.description = description;
    return symbol;
  };
  var $defineProperty = function defineProperty(O, P, Attributes) {
    if (O === ObjectPrototype)
      $defineProperty(ObjectPrototypeSymbols, P, Attributes);
    anObject(O);
    var key = toPropertyKey$1(P);
    anObject(Attributes);
    if (hasOwn(AllSymbols, key)) {
      if (!Attributes.enumerable) {
        if (!hasOwn(O, HIDDEN))
          nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
        O[HIDDEN][key] = true;
      } else {
        if (hasOwn(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
        Attributes = nativeObjectCreate(Attributes, {
          enumerable: createPropertyDescriptor(0, false),
        });
      }
      return setSymbolDescriptor(O, key, Attributes);
    }
    return nativeDefineProperty(O, key, Attributes);
  };
  var $defineProperties = function defineProperties(O, Properties) {
    var _context;
    anObject(O);
    var properties = toIndexedObject(Properties);
    var keys = concat((_context = objectKeys$1(properties))).call(
      _context,
      $getOwnPropertySymbols(properties)
    );
    $forEach(keys, function (key) {
      if (!DESCRIPTORS || call($propertyIsEnumerable, properties, key))
        $defineProperty(O, key, properties[key]);
    });
    return O;
  };
  var $create = function create(O, Properties) {
    return Properties === undefined
      ? nativeObjectCreate(O)
      : $defineProperties(nativeObjectCreate(O), Properties);
  };
  var $propertyIsEnumerable = function propertyIsEnumerable(V) {
    var P = toPropertyKey$1(V);
    var enumerable = call(nativePropertyIsEnumerable, this, P);
    if (
      this === ObjectPrototype &&
      hasOwn(AllSymbols, P) &&
      !hasOwn(ObjectPrototypeSymbols, P)
    )
      return false;
    return enumerable ||
      !hasOwn(this, P) ||
      !hasOwn(AllSymbols, P) ||
      (hasOwn(this, HIDDEN) && this[HIDDEN][P])
      ? enumerable
      : true;
  };
  var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
    var it = toIndexedObject(O);
    var key = toPropertyKey$1(P);
    if (
      it === ObjectPrototype &&
      hasOwn(AllSymbols, key) &&
      !hasOwn(ObjectPrototypeSymbols, key)
    )
      return;
    var descriptor = nativeGetOwnPropertyDescriptor(it, key);
    if (
      descriptor &&
      hasOwn(AllSymbols, key) &&
      !(hasOwn(it, HIDDEN) && it[HIDDEN][key])
    ) {
      descriptor.enumerable = true;
    }
    return descriptor;
  };
  var $getOwnPropertyNames = function getOwnPropertyNames(O) {
    var names = nativeGetOwnPropertyNames(toIndexedObject(O));
    var result = [];
    $forEach(names, function (key) {
      if (!hasOwn(AllSymbols, key) && !hasOwn(hiddenKeys$1, key))
        push(result, key);
    });
    return result;
  };
  var $getOwnPropertySymbols = function $getOwnPropertySymbols(O) {
    var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
    var names = nativeGetOwnPropertyNames(
      IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O)
    );
    var result = [];
    $forEach(names, function (key) {
      if (
        hasOwn(AllSymbols, key) &&
        (!IS_OBJECT_PROTOTYPE || hasOwn(ObjectPrototype, key))
      ) {
        push(result, AllSymbols[key]);
      }
    });
    return result;
  };

  // `Symbol` constructor
  // https://tc39.es/ecma262/#sec-symbol-constructor
  if (!NATIVE_SYMBOL) {
    $Symbol = function _Symbol2() {
      if (isPrototypeOf(SymbolPrototype, this))
        throw TypeError$1('Symbol is not a constructor');
      var description =
        !arguments.length || arguments[0] === undefined
          ? undefined
          : toString$1(arguments[0]);
      var tag = uid(description);
      var setter = function setter(value) {
        if (this === ObjectPrototype)
          call(setter, ObjectPrototypeSymbols, value);
        if (hasOwn(this, HIDDEN) && hasOwn(this[HIDDEN], tag))
          this[HIDDEN][tag] = false;
        setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
      };
      if (DESCRIPTORS && USE_SETTER)
        setSymbolDescriptor(ObjectPrototype, tag, {
          configurable: true,
          set: setter,
        });
      return wrap(tag, description);
    };
    SymbolPrototype = $Symbol[PROTOTYPE];
    defineBuiltIn(SymbolPrototype, 'toString', function toString() {
      return getInternalState(this).tag;
    });
    defineBuiltIn($Symbol, 'withoutSetter', function (description) {
      return wrap(uid(description), description);
    });
    propertyIsEnumerableModule.f = $propertyIsEnumerable;
    definePropertyModule.f = $defineProperty;
    definePropertiesModule.f = $defineProperties;
    require$$0$q.f = $getOwnPropertyDescriptor;
    getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f =
      $getOwnPropertyNames;
    getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;
    wrappedWellKnownSymbolModule.f = function (name) {
      return wrap(wellKnownSymbol$1(name), name);
    };
    if (DESCRIPTORS) {
      // https://github.com/tc39/proposal-Symbol-description
      nativeDefineProperty(SymbolPrototype, 'description', {
        configurable: true,
        get: function description() {
          return getInternalState(this).description;
        },
      });
      if (!IS_PURE) {
        defineBuiltIn(
          ObjectPrototype,
          'propertyIsEnumerable',
          $propertyIsEnumerable,
          {
            unsafe: true,
          }
        );
      }
    }
  }
  $(
    {
      global: true,
      constructor: true,
      wrap: true,
      forced: !NATIVE_SYMBOL,
      sham: !NATIVE_SYMBOL,
    },
    {
      Symbol: $Symbol,
    }
  );
  $forEach(objectKeys$1(WellKnownSymbolsStore$1), function (name) {
    defineWellKnownSymbol(name);
  });
  $(
    {
      target: SYMBOL,
      stat: true,
      forced: !NATIVE_SYMBOL,
    },
    {
      useSetter: function useSetter() {
        USE_SETTER = true;
      },
      useSimple: function useSimple() {
        USE_SETTER = false;
      },
    }
  );
  $(
    {
      target: 'Object',
      stat: true,
      forced: !NATIVE_SYMBOL,
      sham: !DESCRIPTORS,
    },
    {
      // `Object.create` method
      // https://tc39.es/ecma262/#sec-object.create
      create: $create,
      // `Object.defineProperty` method
      // https://tc39.es/ecma262/#sec-object.defineproperty
      defineProperty: $defineProperty,
      // `Object.defineProperties` method
      // https://tc39.es/ecma262/#sec-object.defineproperties
      defineProperties: $defineProperties,
      // `Object.getOwnPropertyDescriptor` method
      // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
      getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
    }
  );
  $(
    {
      target: 'Object',
      stat: true,
      forced: !NATIVE_SYMBOL,
    },
    {
      // `Object.getOwnPropertyNames` method
      // https://tc39.es/ecma262/#sec-object.getownpropertynames
      getOwnPropertyNames: $getOwnPropertyNames,
    }
  );

  // `Symbol.prototype[@@toPrimitive]` method
  // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
  defineSymbolToPrimitive();

  // `Symbol.prototype[@@toStringTag]` property
  // https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
  setToStringTag($Symbol, SYMBOL);
  hiddenKeys$1[HIDDEN] = true;

  var _for$2 = path.Symbol['for'];

  var parent$5 = _for$2;

  var _for$1 = parent$5;

  var require$$0$5 = _for$1;

  var _for = require$$0$5;

  var keyFor$2 = path.Symbol.keyFor;

  var parent$4 = keyFor$2;

  var keyFor$1 = parent$4;

  var require$$0$4 = keyFor$1;

  var keyFor = require$$0$4;

  /* eslint-disable es/no-symbol -- safe */
  var symbolRegistryDetection = NATIVE_SYMBOL && !!_for && !!keyFor;

  var NATIVE_SYMBOL_REGISTRY = symbolRegistryDetection;

  var StringToSymbolRegistry = shared('string-to-symbol-registry');
  var SymbolToStringRegistry$1 = shared('symbol-to-string-registry');

  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  $(
    {
      target: 'Symbol',
      stat: true,
      forced: !NATIVE_SYMBOL_REGISTRY,
    },
    {
      for: function _for(key) {
        var string = toString$1(key);
        if (hasOwn(StringToSymbolRegistry, string))
          return StringToSymbolRegistry[string];
        var symbol = getBuiltIn('Symbol')(string);
        StringToSymbolRegistry[string] = symbol;
        SymbolToStringRegistry$1[symbol] = string;
        return symbol;
      },
    }
  );

  var isSymbol$1 = isSymbol;

  var SymbolToStringRegistry = shared('symbol-to-string-registry');

  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  $(
    {
      target: 'Symbol',
      stat: true,
      forced: !NATIVE_SYMBOL_REGISTRY,
    },
    {
      keyFor: function keyFor(sym) {
        if (!isSymbol$1(sym))
          throw TypeError(tryToString(sym) + ' is not a symbol');
        if (hasOwn(SymbolToStringRegistry, sym))
          return SymbolToStringRegistry[sym];
      },
    }
  );

  var arraySlice = uncurryThis$1(slice([]));

  var nativeSlice = arraySlice;

  var $stringify = getBuiltIn('JSON', 'stringify');
  var exec$1 = uncurryThis$1(/./.exec);
  var charAt = uncurryThis$1(''.charAt);
  var charCodeAt = uncurryThis$1(''.charCodeAt);
  var replace = uncurryThis$1(''.replace);
  var numberToString = uncurryThis$1((1.0).toString);
  var tester = /[\uD800-\uDFFF]/g;
  var low = /^[\uD800-\uDBFF]$/;
  var hi = /^[\uDC00-\uDFFF]$/;
  var WRONG_SYMBOLS_CONVERSION =
    !NATIVE_SYMBOL ||
    fails(function () {
      var symbol = getBuiltIn('Symbol')();
      // MS Edge converts symbol values to JSON as {}
      return (
        $stringify([symbol]) != '[null]' ||
        // WebKit converts symbol values to JSON as null
        $stringify({
          a: symbol,
        }) != '{}' ||
        // V8 throws on boxed symbols
        $stringify(Object(symbol)) != '{}'
      );
    });

  // https://github.com/tc39/proposal-well-formed-stringify
  var ILL_FORMED_UNICODE = fails(function () {
    return (
      $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"' ||
      $stringify('\uDEAD') !== '"\\udead"'
    );
  });
  var stringifyWithSymbolsFix = function stringifyWithSymbolsFix(it, replacer) {
    var args = nativeSlice(arguments);
    var $replacer = replacer;
    if ((!isObject(replacer) && it === undefined) || isSymbol$1(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer))
      replacer = function replacer(key, value) {
        if (isCallable($replacer)) value = call($replacer, this, key, value);
        if (!isSymbol$1(value)) return value;
      };
    args[1] = replacer;
    return apply$4($stringify, null, args);
  };
  var fixIllFormed = function fixIllFormed(match, offset, string) {
    var prev = charAt(string, offset - 1);
    var next = charAt(string, offset + 1);
    if (
      (exec$1(low, match) && !exec$1(hi, next)) ||
      (exec$1(hi, match) && !exec$1(low, prev))
    ) {
      return '\\u' + numberToString(charCodeAt(match, 0), 16);
    }
    return match;
  };
  if ($stringify) {
    // `JSON.stringify` method
    // https://tc39.es/ecma262/#sec-json.stringify
    $(
      {
        target: 'JSON',
        stat: true,
        arity: 3,
        forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE,
      },
      {
        // eslint-disable-next-line no-unused-vars -- required for `.length`
        stringify: function stringify(it, replacer, space) {
          var args = nativeSlice(arguments);
          var result = apply$4(
            WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify,
            null,
            args
          );
          return ILL_FORMED_UNICODE && typeof result == 'string'
            ? replace(result, tester, fixIllFormed)
            : result;
        },
      }
    );
  }

  // V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
  // https://bugs.chromium.org/p/v8/issues/detail?id=3443
  var FORCED$1 =
    !NATIVE_SYMBOL ||
    fails(function () {
      getOwnPropertySymbolsModule.f(1);
    });

  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  $(
    {
      target: 'Object',
      stat: true,
      forced: FORCED$1,
    },
    {
      getOwnPropertySymbols: function getOwnPropertySymbols(it) {
        var $getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
        return $getOwnPropertySymbols
          ? $getOwnPropertySymbols(toObject(it))
          : [];
      },
    }
  );

  var getOwnPropertySymbols$2 = path.Object.getOwnPropertySymbols;

  var parent$3 = getOwnPropertySymbols$2;

  var getOwnPropertySymbols$1 = parent$3;

  var require$$0$3 = getOwnPropertySymbols$1;

  var getOwnPropertySymbols = require$$0$3;

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
  var symbolConstructorDetection =
    !!getOwnPropertySymbols &&
    !fails(function () {
      var symbol$1 = symbol();
      // Chrome 38 Symbol has incorrect toString conversion
      // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
      return (
        !String(symbol$1) ||
        !(Object(symbol$1) instanceof symbol) ||
        // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
        (!symbol.sham && V8_VERSION && V8_VERSION < 41)
      );
    });

  var useSymbolAsUid =
    NATIVE_SYMBOL && !symbol.sham && _typeof(iterator) == 'symbol';

  var USE_SYMBOL_AS_UID = useSymbolAsUid;

  var $Object$1 = Object;
  var isSymbol = USE_SYMBOL_AS_UID
    ? function (it) {
        return _typeof(it) == 'symbol';
      }
    : function (it) {
        var $Symbol = getBuiltIn('Symbol');
        return (
          isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object$1(it))
        );
      };

  var $TypeError$2 = TypeError;

  // `OrdinaryToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-ordinarytoprimitive
  var ordinaryToPrimitive$1 = function ordinaryToPrimitive(input, pref) {
    var fn, val;
    if (
      pref === 'string' &&
      isCallable((fn = input.toString)) &&
      !isObject((val = call(fn, input)))
    )
      return val;
    if (isCallable((fn = input.valueOf)) && !isObject((val = call(fn, input))))
      return val;
    if (
      pref !== 'string' &&
      isCallable((fn = input.toString)) &&
      !isObject((val = call(fn, input)))
    )
      return val;
    throw $TypeError$2("Can't convert object to primitive value");
  };

  var ordinaryToPrimitive = ordinaryToPrimitive$1;

  var $TypeError$1 = TypeError;
  var TO_PRIMITIVE = wellKnownSymbol$1('toPrimitive');

  // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  var toPrimitive$1 = function toPrimitive(input, pref) {
    if (!isObject(input) || isSymbol$1(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
      if (pref === undefined) pref = 'default';
      result = call(exoticToPrim, input, pref);
      if (!isObject(result) || isSymbol$1(result)) return result;
      throw $TypeError$1("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = 'number';
    return ordinaryToPrimitive(input, pref);
  };

  var toPrimitive = toPrimitive$1;

  // `ToPropertyKey` abstract operation
  // https://tc39.es/ecma262/#sec-topropertykey
  var toPropertyKey = function toPropertyKey(argument) {
    var key = toPrimitive(argument, 'string');
    return isSymbol$1(key) ? key : key + '';
  };

  var createProperty = function createProperty(object, key, value) {
    var propertyKey = toPropertyKey$1(key);
    if (propertyKey in object)
      definePropertyModule.f(
        object,
        propertyKey,
        createPropertyDescriptor(0, value)
      );
    else object[propertyKey] = value;
  };

  var IS_CONCAT_SPREADABLE = wellKnownSymbol$1('isConcatSpreadable');

  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/679
  var IS_CONCAT_SPREADABLE_SUPPORT =
    V8_VERSION >= 51 ||
    !fails(function () {
      var array = [];
      array[IS_CONCAT_SPREADABLE] = false;
      return concat(array).call(array)[0] !== array;
    });
  var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');
  var isConcatSpreadable = function isConcatSpreadable(O) {
    if (!isObject(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray(O);
  };
  var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

  // `Array.prototype.concat` method
  // https://tc39.es/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species
  $(
    {
      target: 'Array',
      proto: true,
      arity: 1,
      forced: FORCED,
    },
    {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      concat: function concat(arg) {
        var O = toObject(this);
        var A = arraySpeciesCreate(O, 0);
        var n = 0;
        var i, k, length, len, E;
        for (i = -1, length = arguments.length; i < length; i++) {
          E = i === -1 ? O : arguments[i];
          if (isConcatSpreadable(E)) {
            len = lengthOfArrayLike(E);
            doesNotExceedSafeInteger(n + len);
            for (k = 0; k < len; k++, n++) {
              if (k in E) createProperty$1(A, n, E[k]);
            }
          } else {
            doesNotExceedSafeInteger(n + 1);
            createProperty$1(A, n++, E);
          }
        }
        A.length = n;
        return A;
      },
    }
  );

  // `Symbol.asyncIterator` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.asynciterator
  defineWellKnownSymbol('asyncIterator');

  // `Symbol.hasInstance` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.hasinstance
  defineWellKnownSymbol('hasInstance');

  // `Symbol.isConcatSpreadable` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.isconcatspreadable
  defineWellKnownSymbol('isConcatSpreadable');

  // `Symbol.match` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.match
  defineWellKnownSymbol('match');

  // `Symbol.matchAll` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.matchall
  defineWellKnownSymbol('matchAll');

  // `Symbol.replace` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.replace
  defineWellKnownSymbol('replace');

  // `Symbol.search` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.search
  defineWellKnownSymbol('search');

  // `Symbol.species` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.species
  defineWellKnownSymbol('species');

  // `Symbol.split` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.split
  defineWellKnownSymbol('split');

  // `Symbol.toPrimitive` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.toprimitive
  defineWellKnownSymbol('toPrimitive');

  // `Symbol.prototype[@@toPrimitive]` method
  // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
  defineSymbolToPrimitive();

  // `Symbol.toStringTag` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.tostringtag
  defineWellKnownSymbol('toStringTag');

  // `Symbol.prototype[@@toStringTag]` property
  // https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
  setToStringTag(getBuiltIn('Symbol'), 'Symbol');

  // `Symbol.unscopables` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.unscopables
  defineWellKnownSymbol('unscopables');

  // JSON[@@toStringTag] property
  // https://tc39.es/ecma262/#sec-json-@@tostringtag
  setToStringTag(global$2.JSON, 'JSON', true);

  var symbol$2 = path.Symbol;

  var parent$2 = symbol$2;

  var symbol$1 = parent$2;

  var require$$0$2 = symbol$1;

  var symbol = require$$0$2;

  var WellKnownSymbolsStore = shared('wks');
  var _Symbol = symbol;
  var symbolFor = _Symbol && _Symbol['for'];
  var createWellKnownSymbol = USE_SYMBOL_AS_UID
    ? _Symbol
    : (_Symbol && _Symbol.withoutSetter) || uid;
  var wellKnownSymbol = function wellKnownSymbol(name) {
    if (
      !hasOwn(WellKnownSymbolsStore, name) ||
      !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')
    ) {
      var description = 'Symbol.' + name;
      if (NATIVE_SYMBOL && hasOwn(_Symbol, name)) {
        WellKnownSymbolsStore[name] = _Symbol[name];
      } else if (USE_SYMBOL_AS_UID && symbolFor) {
        WellKnownSymbolsStore[name] = symbolFor(description);
      } else {
        WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
      }
    }
    return WellKnownSymbolsStore[name];
  };

  var TO_STRING_TAG$1 = wellKnownSymbol$1('toStringTag');
  var test = {};
  test[TO_STRING_TAG$1] = 'z';
  var toStringTagSupport = String(test) === '[object z]';

  var TO_STRING_TAG = wellKnownSymbol$1('toStringTag');
  var $Object = Object;

  // ES3 wrong here
  var CORRECT_ARGUMENTS =
    classof$2(
      (function () {
        return arguments;
      })()
    ) == 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function tryGet(it, key) {
    try {
      return it[key];
    } catch (error) {
      /* empty */
    }
  };

  // getting tag from ES6+ `Object.prototype.toString`
  var classof = TO_STRING_TAG_SUPPORT
    ? classof$2
    : function (it) {
        var O, tag, result;
        return it === undefined
          ? 'Undefined'
          : it === null
          ? 'Null'
          : // @@toStringTag case
          typeof (tag = tryGet((O = $Object(it)), TO_STRING_TAG)) == 'string'
          ? tag
          : // builtinTag case
          CORRECT_ARGUMENTS
          ? classof$2(O)
          : // ES3 arguments fallback
          (result = classof$2(O)) == 'Object' && isCallable(O.callee)
          ? 'Arguments'
          : result;
      };

  var functionToString = uncurryThis$1(Function.toString);

  // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
  if (!isCallable(store$1.inspectSource)) {
    store$1.inspectSource = function (it) {
      return functionToString(it);
    };
  }
  var inspectSource$1 = store$1.inspectSource;

  var inspectSource = inspectSource$1;

  var noop = function noop() {
    /* empty */
  };
  var empty = [];
  var construct = getBuiltIn('Reflect', 'construct');
  var constructorRegExp = /^\s*(?:class|function)\b/;
  var exec = uncurryThis$1(constructorRegExp.exec);
  var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);
  var isConstructorModern = function isConstructor(argument) {
    if (!isCallable(argument)) return false;
    try {
      construct(noop, empty, argument);
      return true;
    } catch (error) {
      return false;
    }
  };
  var isConstructorLegacy = function isConstructor(argument) {
    if (!isCallable(argument)) return false;
    switch (classof$1(argument)) {
      case 'AsyncFunction':
      case 'GeneratorFunction':
      case 'AsyncGeneratorFunction':
        return false;
    }
    try {
      // we can't check .prototype since constructors produced by .bind haven't it
      // `Function#toString` throws on some built-it function in some legacy engines
      // (for example, `DOMQuad` and similar in FF41-)
      return (
        INCORRECT_TO_STRING ||
        !!exec(constructorRegExp, inspectSource(argument))
      );
    } catch (error) {
      return true;
    }
  };
  isConstructorLegacy.sham = true;

  // `IsConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-isconstructor
  var isConstructor =
    !construct ||
    fails(function () {
      var called;
      return (
        isConstructorModern(isConstructorModern.call) ||
        !isConstructorModern(Object) ||
        !isConstructorModern(function () {
          called = true;
        }) ||
        called
      );
    })
      ? isConstructorLegacy
      : isConstructorModern;

  var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
  var SPECIES = wellKnownSymbol$1('species');
  var $Array = Array;
  var max = Math.max;

  // `Array.prototype.slice` method
  // https://tc39.es/ecma262/#sec-array.prototype.slice
  // fallback for not array-like ES3 strings and DOM objects
  $(
    {
      target: 'Array',
      proto: true,
      forced: !HAS_SPECIES_SUPPORT,
    },
    {
      slice: function slice(start, end) {
        var O = toIndexedObject(this);
        var length = lengthOfArrayLike(O);
        var k = toAbsoluteIndex(start, length);
        var fin = toAbsoluteIndex(end === undefined ? length : end, length);
        // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
        var Constructor, result, n;
        if (isArray(O)) {
          Constructor = O.constructor;
          // cross-realm fallback
          if (
            isConstructor$1(Constructor) &&
            (Constructor === $Array || isArray(Constructor.prototype))
          ) {
            Constructor = undefined;
          } else if (isObject(Constructor)) {
            Constructor = Constructor[SPECIES];
            if (Constructor === null) Constructor = undefined;
          }
          if (Constructor === $Array || Constructor === undefined) {
            return nativeSlice(O, k, fin);
          }
        }
        result = new (Constructor === undefined ? $Array : Constructor)(
          max(fin - k, 0)
        );
        for (n = 0; k < fin; k++, n++) {
          if (k in O) createProperty$1(result, n, O[k]);
        }
        result.length = n;
        return result;
      },
    }
  );

  var slice$3 = slice(entryVirtual('Array'));

  var method = slice$3;

  var ArrayPrototype$1 = Array.prototype;
  var slice$2 = function slice$1(it) {
    var own = slice(it);
    return it === ArrayPrototype$1 ||
      (isPrototypeOf(ArrayPrototype$1, it) && own === slice(ArrayPrototype$1))
      ? method
      : own;
  };

  var parent$1 = slice$2;

  var slice$1 = parent$1;

  var require$$0$1 = slice$1;

  var slice = require$$0$1;

  var toString = uncurryThis$1({}.toString);
  var stringSlice = uncurryThis$1(slice(''));
  var classofRaw = function classofRaw(it) {
    return stringSlice(toString(it), 8, -1);
  };

  var functionUncurryThisClause = function functionUncurryThisClause(fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classof$2(fn) === 'Function') return uncurryThis$1(fn);
  };

  var replacement = /#|\.prototype\./;
  var isForced$1 = function isForced(feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL
      ? true
      : value == NATIVE
      ? false
      : isCallable(detection)
      ? fails(detection)
      : !!detection;
  };
  var normalize = (isForced$1.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  });
  var data = (isForced$1.data = {});
  var NATIVE = (isForced$1.NATIVE = 'N');
  var POLYFILL = (isForced$1.POLYFILL = 'P');
  var isForced_1 = isForced$1;

  var isForced = isForced_1;

  var getOwnPropertyDescriptor = require$$0$q.f;
  var wrapConstructor = function wrapConstructor(NativeConstructor) {
    var Wrapper = function Wrapper(a, b, c) {
      if (this instanceof Wrapper) {
        switch (arguments.length) {
          case 0:
            return new NativeConstructor();
          case 1:
            return new NativeConstructor(a);
          case 2:
            return new NativeConstructor(a, b);
        }
        return new NativeConstructor(a, b, c);
      }
      return apply$4(NativeConstructor, this, arguments);
    };
    Wrapper.prototype = NativeConstructor.prototype;
    return Wrapper;
  };

  /*
    options.target         - name of the target object
    options.global         - target is the global object
    options.stat           - export as static methods of target
    options.proto          - export as prototype methods of target
    options.real           - real prototype method for the `pure` version
    options.forced         - export even if the native feature is available
    options.bind           - bind methods to the target, required for the `pure` version
    options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe         - use the simple assignment of property instead of delete + defineProperty
    options.sham           - add a flag to not completely full polyfills
    options.enumerable     - export as enumerable property
    options.dontCallGetSet - prevent calling a getter on target
    options.name           - the .name of the function if it does not match the key
  */
  var _export = function _export(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var PROTO = options.proto;
    var nativeSource = GLOBAL
      ? global$2
      : STATIC
      ? global$2[TARGET]
      : (global$2[TARGET] || {}).prototype;
    var target = GLOBAL
      ? path
      : path[TARGET] || createNonEnumerableProperty(path, TARGET, {})[TARGET];
    var targetPrototype = target.prototype;
    var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
    var key,
      sourceProperty,
      targetProperty,
      nativeProperty,
      resultProperty,
      descriptor;
    for (key in source) {
      FORCED = isForced(
        GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key,
        options.forced
      );
      // contains in native
      USE_NATIVE = !FORCED && nativeSource && hasOwn(nativeSource, key);
      targetProperty = target[key];
      if (USE_NATIVE)
        if (options.dontCallGetSet) {
          descriptor = getOwnPropertyDescriptor(nativeSource, key);
          nativeProperty = descriptor && descriptor.value;
        } else nativeProperty = nativeSource[key];

      // export native or implementation
      sourceProperty =
        USE_NATIVE && nativeProperty ? nativeProperty : source[key];
      if (USE_NATIVE && _typeof(targetProperty) == _typeof(sourceProperty))
        continue;

      // bind timers to global for call from export context
      if (options.bind && USE_NATIVE)
        resultProperty = bind(sourceProperty, global$2);
      // wrap global constructors for prevent changs in this version
      else if (options.wrap && USE_NATIVE)
        resultProperty = wrapConstructor(sourceProperty);
      // make static versions for prototype methods
      else if (PROTO && isCallable(sourceProperty))
        resultProperty = uncurryThis(sourceProperty);
      // default case
      else resultProperty = sourceProperty;

      // add a flag to not completely full polyfills
      if (
        options.sham ||
        (sourceProperty && sourceProperty.sham) ||
        (targetProperty && targetProperty.sham)
      ) {
        createNonEnumerableProperty(resultProperty, 'sham', true);
      }
      createNonEnumerableProperty(target, key, resultProperty);
      if (PROTO) {
        VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
        if (!hasOwn(path, VIRTUAL_PROTOTYPE)) {
          createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
        }
        // export virtual prototype methods
        createNonEnumerableProperty(
          path[VIRTUAL_PROTOTYPE],
          key,
          sourceProperty
        );
        // export real prototype methods
        if (options.real && targetPrototype && !targetPrototype[key]) {
          createNonEnumerableProperty(targetPrototype, key, sourceProperty);
        }
      }
    }
  };

  var $includes = includes(require$$0$l);

  // FF99+ bug
  var BROKEN_ON_SPARSE = fails(function () {
    var _context;
    return !includes((_context = Array(1))).call(_context);
  });

  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  $(
    {
      target: 'Array',
      proto: true,
      forced: BROKEN_ON_SPARSE,
    },
    {
      includes: function includes(el /* , fromIndex = 0 */) {
        return $includes(
          this,
          el,
          arguments.length > 1 ? arguments[1] : undefined
        );
      },
    }
  );

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables();

  var includes$4 = includes(entryVirtual('Array'));

  var MATCH$1 = wellKnownSymbol$1('match');

  // `IsRegExp` abstract operation
  // https://tc39.es/ecma262/#sec-isregexp
  var isRegexp = function isRegexp(it) {
    var isRegExp;
    return (
      isObject(it) &&
      ((isRegExp = it[MATCH$1]) !== undefined
        ? !!isRegExp
        : classof$2(it) == 'RegExp')
    );
  };

  var isRegExp = isRegexp;

  var $TypeError = TypeError;
  var notARegexp = function notARegexp(it) {
    if (isRegExp(it)) {
      throw $TypeError("The method doesn't accept regular expressions");
    }
    return it;
  };

  var MATCH = wellKnownSymbol$1('match');
  var correctIsRegexpLogic = function correctIsRegexpLogic(METHOD_NAME) {
    var regexp = /./;
    try {
      '/./'[METHOD_NAME](regexp);
    } catch (error1) {
      try {
        regexp[MATCH] = false;
        return '/./'[METHOD_NAME](regexp);
      } catch (error2) {
        /* empty */
      }
    }
    return false;
  };

  var notARegExp = notARegexp;

  var correctIsRegExpLogic = correctIsRegexpLogic;

  var stringIndexOf = uncurryThis$1(indexOf$1(''));

  // `String.prototype.includes` method
  // https://tc39.es/ecma262/#sec-string.prototype.includes
  $(
    {
      target: 'String',
      proto: true,
      forced: !correctIsRegExpLogic('includes'),
    },
    {
      includes: function includes(searchString /* , position = 0 */) {
        return !!~stringIndexOf(
          toString$1(requireObjectCoercible(this)),
          toString$1(notARegExp(searchString)),
          arguments.length > 1 ? arguments[1] : undefined
        );
      },
    }
  );

  var includes$3 = includes(entryVirtual('String'));

  var arrayMethod = includes$4;

  var stringMethod = includes$3;

  var ArrayPrototype = Array.prototype;
  var StringPrototype = String.prototype;
  var includes$2 = function includes$1(it) {
    var own = includes(it);
    if (
      it === ArrayPrototype ||
      (isPrototypeOf(ArrayPrototype, it) && own === includes(ArrayPrototype))
    )
      return arrayMethod;
    if (
      typeof it == 'string' ||
      it === StringPrototype ||
      (isPrototypeOf(StringPrototype, it) && own === includes(StringPrototype))
    ) {
      return stringMethod;
    }
    return own;
  };

  var parent = includes$2;

  var includes$1 = parent;

  var require$$0 = includes$1;

  var includes = require$$0;

  var _context;
  // const { dateFormat, priceFormat } = require('./js/format');
  // console.log(dateFormat('1213'));

  // import { sum, mul } from './js/math';
  // import { ref } from 'vue';

  // console.log(sum, mul);
  console.log(includes((_context = [])).call(_context, 1));
  // console.log(ref);
  // console.log(sum(1, 2));

  // import answer from 'the-answer';
  // console.log(answer);

  // import { sum } from 'aaab';
  // console.log(sum);
  // import debounce from 'lodash';
  // console.log(debounce);
  // console.log([1, 22312].includes(1));
  // async function say() {
  //   await 1;
  //   console.log([1].includes(2));
  // }
  // export default say;
});
